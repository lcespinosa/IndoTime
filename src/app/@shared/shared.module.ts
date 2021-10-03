import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { UiModule } from './ui/ui.module';

import { LoaderComponent } from './loader/loader.component';
import { LogoComponent } from './logo/logo.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';

@NgModule({
  imports: [TranslateModule, CommonModule, UiModule],
  declarations: [LoaderComponent, LogoComponent, AdminHeaderComponent],
  exports: [LoaderComponent, LogoComponent, AdminHeaderComponent, UiModule],
})
export class SharedModule {}
