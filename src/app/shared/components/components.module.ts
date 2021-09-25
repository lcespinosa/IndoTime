import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo/logo.component';
import { HeadComponent } from './head/head.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    LogoComponent,
    HeadComponent,
    NavigationBarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LogoComponent,
    HeadComponent,
    NavigationBarComponent,
    HeaderComponent
  ]
})
export class ComponentsModule { }
