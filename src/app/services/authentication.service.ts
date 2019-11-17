import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { tap } from 'rxjs/operators';
import { AuthResponse } from '../models/auth-response';
const TOKEN_KEY = 'auth-token';
@Injectable({
  providedIn: 'root'
})

/**
 * See: https://ionicframework.com/docs/building/storage
 */

export class AuthenticationService {

  AUTH_SERVER_ADDRESS: string = 'http://api.agendec.com.br/api';
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
    return this.httpClient.post(`${this.AUTH_SERVER_ADDRESS}/login`, user).pipe(
      tap(async (res: AuthResponse) => {

        if (res['success'].token) {
          const token = 'Bearer ' + res['success'].token;
          return this.storage.set(TOKEN_KEY, token).then(() => {
            this.authenticationState.next(true);
          });
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