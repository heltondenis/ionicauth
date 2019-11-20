import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BehaviorSubject, Observable, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { tap } from 'rxjs/operators';
import { AuthResponse } from '../models/auth-response';
import { environment } from '../../environments/environment';

const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  API: string = environment.API;  
  authenticationState = new BehaviorSubject(false);

  constructor(private storage: Storage, private platform: Platform, private httpClient: HttpClient) {
    this.platform.ready().then(() => {
      this.checkToken();
    });
  }

  checkToken() {
    return new Promise( (resolve, reject) => {
      this.storage.get(TOKEN_KEY)
      .then(res => {
        if (res) {
          this.authenticationState.next(true);
        }
        resolve(res);
      })
      .catch( error => {
        reject(error);
      });
    });
  }
  
  login(user: User): Observable<AuthResponse> {
    return this.httpClient.post(`${this.API}/login`, user).pipe(
      tap(async (res: AuthResponse) => {
        console.log(res['token']);
        if (res['token']) {
          const token = 'Bearer ' + res['token'];
          return this.storage.set(TOKEN_KEY, token).then(() => {
            this.authenticationState.next(true);
          });
        } else {
          alert('Login incorreto!');
        }
      })
    );
  }

  logout() {
    return this.storage.remove(TOKEN_KEY).then(() => {
      this.authenticationState.next(false);
    });
  }

  isAuthenticated() {
    return new Promise( (resolve, reject) => {
      this.checkToken()
      .then( res => {
        resolve(this.authenticationState.value);
      })
      .catch( error => {
        reject(error);
      });
    });
  }
}