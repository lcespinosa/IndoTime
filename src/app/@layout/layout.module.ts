import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityModule } from './security/security.module';
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [SecurityModule, AdminModule],
})
export class LayoutModule {}
