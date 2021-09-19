import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityComponent } from './security/security.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: '', component: SecurityComponent,
    children: [
      { path: 'login', loadChildren: () => import('../../pages/login/login.module').then(m => m.LoginModule) },
      { path: 'admin-login', loadChildren: () => import('../../pages/admin-login/admin-login.module').then(m => m.AdminLoginModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
