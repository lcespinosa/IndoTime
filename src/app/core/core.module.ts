import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { LayoutModule } from './layout/layout.module'



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  exports: [
    LayoutModule,
  ]
})
export class CoreModule { }
