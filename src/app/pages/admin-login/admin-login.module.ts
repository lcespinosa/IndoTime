import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { AdminLoginRoutingModule } from './admin-login-routing.module';

import { AdminLoginComponent } from './admin-login.component';



@NgModule({
  declarations: [
    AdminLoginComponent
  ],
  imports: [
    SharedModule,
    AdminLoginRoutingModule,
  ]
})
export class AdminLoginModule { }
