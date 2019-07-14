import { Component, OnInit } from '@angular/core';
import { OuthService } from '../../services/outh.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';


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
    public router: Router,
    public flashMensaje: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onSubmitLogin(){
    return this.authService.loginEmail(this.email, this.password)
    .then((resp)=>{
      this.flashMensaje.show('Welcome! to the Task Application.',{
        cssClass: 'alert alert-info', timeout: 4000
      });
      this.router.navigate(['/private']);
    }).catch((err)=>{
      this.flashMensaje.show(err.message,{
        cssClass: 'alert-danger', timeout: 4000
      });
      this.router.navigate(['/login']);
    });
  }

}
