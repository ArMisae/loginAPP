import { Injectable } from '@angular/core';
import { AngularFireAuth }from '@angular/fire/auth';
import * as firebase from 'firebase/app';


@Injectable({
  providedIn: 'root'
})
export class OuthService {

  constructor(
    public afAuth: AngularFireAuth
  ) { }

  loginGoogle(){
    return this.afAuth.auth.signInWithPopup( new firebase.auth.GoogleAuthProvider());
  }

  loginFacebook(){
    return this.afAuth.auth.signInWithPopup( new firebase.auth.FacebookAuthProvider());
  }

  registerUser(email: string, pass: string){
    return new Promise((resolve, reject)=>{
      this.afAuth.auth.createUserWithEmailAndPassword(email, pass)
      .then( userData => resolve(userData),
      err => reject(err))
    });
  }

  loginEmail(email: string, pass: string){
    return new Promise((resolve, reject)=>{
      this.afAuth.auth.signInWithEmailAndPassword(email, pass)
      .then( userData => resolve(userData),
      err => reject(err))
    });
  }

  getAuth(){
    return this.afAuth.authState.pipe(auth=> auth);
  }

  logout(){
    return this.afAuth.auth.signOut();
  }
}
