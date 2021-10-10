import { Routes, Route } from '@angular/router';
import { AdminComponent } from './admin.component';

export class AdminLayout {
  /**
   * Creates routes.
   * @param routes The routes to add.
   * @return The new route using shell as the base.
   */
  static childRoutes(routes: Routes): Route {
    return {
      path: '',
      component: AdminComponent,
      children: routes,
    };
  }
}
