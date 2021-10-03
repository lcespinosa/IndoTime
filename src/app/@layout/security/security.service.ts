import { Routes, Route } from '@angular/router';
import { SecurityComponent } from './security.component';

export class SecurityLayout {
  /**
   * Creates routes using the shell component and authentication.
   * @param routes The routes to add.
   * @return The new route using shell as the base.
   */
  static childRoutes(routes: Routes): Route {
    return {
      path: '',
      component: SecurityComponent,
      children: routes,
    };
  }
}
