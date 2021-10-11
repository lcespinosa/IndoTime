import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared';

import { TicketsRoutingModule } from './tickets-routing.module';
import { TicketsComponent } from './tickets.component';
import { SideformComponent } from './sideform/sideform.component';

@NgModule({
  declarations: [TicketsComponent, SideformComponent],
  imports: [CommonModule, TicketsRoutingModule, SharedModule],
})
export class TicketsModule {}
