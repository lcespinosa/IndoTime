import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoreModule } from '../../core/core.module';
import { SharedModule } from '../../shared/shared.module';

import { AdminLoginComponent } from './admin-login.component';


const routes: Routes = [
  { path: '', component: AdminLoginComponent }
];

@NgModule({
  declarations: [
    AdminLoginComponent
  ],
  imports: [
    CoreModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminLoginModule { }
