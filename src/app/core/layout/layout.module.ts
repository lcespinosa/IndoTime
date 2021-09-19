import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SecurityComponent } from './security/security.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [],
  declarations: [
    SecurityComponent
  ]
})
export class LayoutModule { }
