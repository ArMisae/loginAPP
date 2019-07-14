import { Component, OnInit } from '@angular/core';
import { OuthService } from '../../services/outh.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isLogin: boolean;
  public user: string;
  public email: string;
  public foto: string;

  constructor(
    public authServices: OuthService
  ) { }

  ngOnInit() {
    this.authServices.getAuth().subscribe( auth=> {
      if (auth) {
        this.isLogin = true;
        this.user = auth.displayName;
        this.email = auth.email;
        this.foto = auth.photoURL;
        if(!this.foto || !this.email){
          this.foto = 'http://emser.es/wp-content/uploads/2016/08/usuario-sin-foto.png';
          this.user = auth.email;
        }
        else{
          this.foto = auth.photoURL;
        }

      }else{
        this.isLogin = false
      }
    });
  }

  onSignOut(){
    this.authServices.logout();
  }

}
