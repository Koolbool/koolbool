import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth: AngularFireAuth, private router: Router) {
    this.fireauth.authState.subscribe(res => {
      if (res) {
        console.log("user is signed in");
        console.log(res);
        this.router.navigate(['/dashboard/home']);
      } else {
        console.log("nobody is signed in");
      }
    })
  }

  login(email : string, password : string) {
    return this.fireauth.signInWithEmailAndPassword(email,password)
    // .then( res => {
    //     localStorage.setItem('token','true');

    // }, err => {
    //     alert(err.message);
    //     this.router.navigate(['/auth/login']);
    // })
  }

  // register method
  register(email : string, password : string) {
    return this.fireauth.createUserWithEmailAndPassword(email, password)
    // .then( res => {
    //   console.log('Registration Successful');
    //   console.log(res.user);
    //   this.router.navigate(['/auth/login']);
    // }, err => {
    //   alert(err.message);
    //   this.router.navigate(['/auth/register']);
    // })
  }

  // sign out
  logout() {
    this.fireauth.signOut().then( () => {
      localStorage.removeItem('token');
      this.router.navigate(['/auth/login']);
      console.log("you have been logged out!")
      console.log("you have been logged out!")
      console.log("you have been logged out!")
    }, err => {
      alert(err.message);
    })
  }

  // forgot password
  forgotPassword(email : string) {
      this.fireauth.sendPasswordResetEmail(email).then(() => {
        
      }, err => {
        alert('Something went wrong');
      })
  }
}
