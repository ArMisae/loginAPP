import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HeaderComponent } from './components/header/header.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { PrivatePageComponent } from './components/private-page/private-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { FooterComponent } from './components/footer/footer.component';

import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages'

import { AngularFireModule} from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { environment } from '../environments/environment';

import { OuthService } from './services/outh.service';

import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    RegisterPageComponent,
    LoginPageComponent,
    PrivatePageComponent,
    NotFoundPageComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FlashMessagesModule
  ],
  providers: [OuthService, AuthGuard, FlashMessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
