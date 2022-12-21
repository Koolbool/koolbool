import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { map, Observable } from 'rxjs';
import { UserService } from './user.service';
// import { router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FullAuthGuardService implements CanActivate {

  constructor(private router: Router, private afs: AngularFirestore, private afAuth: AngularFireAuth, private userService: UserService) {
  }

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let response = await this.userService.hasUserCompletedFullSignup()

    if (response) {
      return true;
    } else {
      this.router.navigateByUrl('dashboard/complete-signup');
      return false;
    }

  }
}
