import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {PreloadAllModules, RouterModule} from '@angular/router';

import { CoreModule } from './core/core.module';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    PagesModule,
    RouterModule.forRoot([]),
    // RouterModule.forRoot([], { preloadingStrategy: PreloadAllModules }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
