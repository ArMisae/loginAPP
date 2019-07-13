import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PrivatePageComponent } from './components/private-page/private-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:'', component: HomePageComponent},
  {path: 'login', component: LoginPageComponent},
  {path:'register', component: RegisterPageComponent},
  {path:'private', component: PrivatePageComponent, canActivate: [AuthGuard] },
  {path:'**', component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
