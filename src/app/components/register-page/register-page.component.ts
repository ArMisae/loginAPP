import { Component, OnInit } from '@angular/core';
import { OuthService } from '../../services/outh.service';
import { Router } from '@angular/router';

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
    public router: Router
  ) { }

  ngOnInit() {
  }

  onSubmitAddUser(){
    this.authServices.registerUser(this.email, this.password)
    .then( (res) =>{
      this.router.navigate(['/private']);
    }).catch( (err) =>{
      console.log(err);
    });
  }
}
