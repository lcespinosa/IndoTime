import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

import { I18nModule } from '@core/i18n';
import { AuthModule } from '@core/auth';
import { ShellComponent } from './shell.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    AuthModule,
    I18nModule,
    RouterModule,
  ],
  declarations: [HeaderComponent, ShellComponent],
})
export class ShellModule {}
