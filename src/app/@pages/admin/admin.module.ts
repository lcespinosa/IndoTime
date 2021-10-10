import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardModule } from './dashboard/dashboard.module';
import { TicketsModule } from './tickets/tickets.module';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [DashboardModule, TicketsModule],
})
export class AdminModule {}
