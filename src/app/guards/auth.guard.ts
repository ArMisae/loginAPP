import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable} from 'rxjs';
import {map,take, tap} from 'rxjs/operators';

import { AngularFireAuth } from '@angular/fire/auth';
import { OuthService } from '../services/outh.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private authServices: OuthService

  ){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authServices.afAuth.authState
    .pipe(take(1))
    .pipe(map(authSate=>!!authSate))
    .pipe(tap(authenticati => {
      if (!authenticati) {
        this.router.navigate(['/login']);
      }
    }));
  }
  
}
