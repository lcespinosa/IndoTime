import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SecurityComponent } from './security/security.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [],
  declarations: [
    SecurityComponent,
    AdminComponent,
  ]
})
export class LayoutModule { }
