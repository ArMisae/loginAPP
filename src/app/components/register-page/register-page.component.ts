import { Component, OnInit } from '@angular/core';
import { OuthService } from '../../services/outh.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  public password: string;
  public email: string;

  constructor(
    public authServices: OuthService,
    public router: Router,
    public flashMensaje: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onSubmitAddUser(){
    this.authServices.registerUser(this.email, this.password)
    .then( (res) =>{
      this.flashMensaje.show('User registration correctly!.',{
        cssClass: 'alert-success', timeout: 4000
      });
      this.router.navigate(['/task']);
    }).catch( (err) =>{
      this.flashMensaje.show(err.message,{
        cssClass: 'alert-danger', timeout: 4000
      });
    });
  }
}
