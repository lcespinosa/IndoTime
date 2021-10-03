import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SecurityComponent } from './security.component';



@NgModule({
  declarations: [
    SecurityComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SecurityModule { }
