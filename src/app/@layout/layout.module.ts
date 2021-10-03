import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityModule } from './security/security.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [SecurityModule]
})
export class LayoutModule { }
