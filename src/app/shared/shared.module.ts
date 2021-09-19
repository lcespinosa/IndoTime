import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from './ui/ui.module'
import { ComponentsModule } from './components/components.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    UiModule,
    ComponentsModule,
  ],
  exports: [
    CommonModule,
    UiModule,
    ComponentsModule,
  ]
})
export class SharedModule { }
