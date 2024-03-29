import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './page/change-password/change-password.component';
import { ForgotPasswordComponent } from './page/forgot-password/forgot-password.component';
import { LandingComponent } from './page/landing/landing.component';
import { SignComponent } from './page/sign/sign.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/landing',
    pathMatch: 'full',
  },
  {
    path: 'landing',
    component: LandingComponent
  },
  {
    path: 'login',
    component: SignComponent,
    data: {
      isSignUp: false
    }
  },
  {
    path: 'register',
    component: SignComponent,
    data: {
      isSignUp: true
    }
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },
  {
    path: 'change-password',
    component: ChangePasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
