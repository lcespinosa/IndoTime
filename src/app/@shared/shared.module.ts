import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

import { UiModule } from './ui/ui.module';

import { LoaderComponent } from './loader/loader.component';
import { LogoComponent } from './logo/logo.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';

import { NgIconsModule } from '@ng-icons/core';
import {
  HeroHome,
  HeroTicket,
  HeroPlus,
  HeroX,
  HeroUserGroup,
  HeroAdjustments,
  HeroLogin,
  HeroLogout,
} from '@ng-icons/heroicons';

@NgModule({
  imports: [
    TranslateModule,
    CommonModule,
    UiModule,
    NgIconsModule.withIcons({
      HeroHome,
      HeroTicket,
      HeroPlus,
      HeroX,
      HeroUserGroup,
      HeroAdjustments,
      HeroLogin,
      HeroLogout,
    }),
  ],
  declarations: [LoaderComponent, LogoComponent, AdminHeaderComponent],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    LoaderComponent,
    LogoComponent,
    AdminHeaderComponent,
    UiModule,
    NgIconsModule,
    NgSelectModule,
  ],
})
export class SharedModule {}
