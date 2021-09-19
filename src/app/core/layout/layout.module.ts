import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { SecurityComponent } from './security/security.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
  ],
  exports: [],
  declarations: [
    SecurityComponent
  ]
})
export class LayoutModule { }
