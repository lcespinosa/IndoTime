import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

import { LoginComponent } from './login.component';
import { SecurityLayout } from '@layout/security/security.service';

const routes: Routes = [
  SecurityLayout.childRoutes([
    {
      path: 'login',
      component: LoginComponent,
      data: { title: marker('Login') },
    },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AuthRoutingModule {}
