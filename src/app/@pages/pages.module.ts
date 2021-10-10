import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared'

import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, SharedModule],
  exports: [AdminModule],
})
export class PagesModule {}
