import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from './../../services/authentication.service';
@Component({
selector: 'app-login',
templateUrl: './login.page.html',
styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  private username: string;
  private password: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private authService: AuthenticationService,
    public router: Router
  ) { }
  
  ngOnInit() {
  }
  
  login(form){
    this.authService.login(form.value).subscribe((res)=>{
      console.log(res);
      this.router.navigateByUrl(`tabs/feed`);
    });
  }

  goHome() {
    this.router.navigateByUrl( 'tabs/feed' );
  }
}