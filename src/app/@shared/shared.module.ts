import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { UiModule } from './ui/ui.module';

import { LoaderComponent } from './loader/loader.component';
import { LogoComponent } from './logo/logo.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';

import { NgIconsModule } from '@ng-icons/core';
import { HeroHome, HeroTicket } from '@ng-icons/heroicons';

@NgModule({
  imports: [
    TranslateModule,
    CommonModule,
    UiModule,
    NgIconsModule.withIcons({ HeroHome, HeroTicket }),
  ],
  declarations: [LoaderComponent, LogoComponent, AdminHeaderComponent],
  exports: [
    LoaderComponent,
    LogoComponent,
    AdminHeaderComponent,
    UiModule,
    NgIconsModule,
  ],
})
export class SharedModule {}
