import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { I18nModule } from './i18n';
import { AuthModule } from './auth';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule],
  exports: [I18nModule, AuthModule],
})
export class CoreModule {}
