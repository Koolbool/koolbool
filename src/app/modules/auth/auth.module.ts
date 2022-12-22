import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SignComponent } from './page/sign/sign.component';
import { ChangePasswordComponent } from './page/change-password/change-password.component';
import { ForgotPasswordComponent } from './page/forgot-password/forgot-password.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LandingComponent } from './page/landing/landing.component';


@NgModule({
  declarations: [
    SignComponent,
    ChangePasswordComponent,
    ForgotPasswordComponent,
    LandingComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
