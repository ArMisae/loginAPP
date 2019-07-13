import { Component, OnInit } from '@angular/core';
import { OuthService } from '../../services/outh.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  public email: string;
  public password: string

  constructor(
    public authService: OuthService,
    public router: Router
  ) { }

  ngOnInit() {
  }

  onSubmitLogin(){
    return this.authService.loginEmail(this.email, this.password)
    .then((resp)=>{
      this.router.navigate(['/private']);
    }).catch((err)=>{
      console.log(err);
      this.router.navigate(['/login']);
    });
  }

}
