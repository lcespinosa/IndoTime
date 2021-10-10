import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

import { AdminLayout } from '@layout/admin/admin.service';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  AdminLayout.childRoutes([
    {
      path: 'admin/dashboard',
      component: DashboardComponent,
      data: { title: marker('Dashboard') },
    },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
