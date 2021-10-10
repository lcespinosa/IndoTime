import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

import { AdminLayout } from '@layout/admin/admin.service';
import { TicketsComponent } from './tickets.component';

const routes: Routes = [
  AdminLayout.childRoutes([
    {
      path: 'admin/tickets',
      component: TicketsComponent,
      data: { title: marker('Tickets') },
    },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TicketsRoutingModule {}
