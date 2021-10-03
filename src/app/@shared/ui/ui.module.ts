import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { TitleComponent } from './title/title.component';
import { LabelComponent } from './label/label.component';
import { InputComponent } from './input/input.component';
import { CheckboxComponent } from './checkbox/checkbox.component';

@NgModule({
  declarations: [ButtonComponent, TitleComponent, LabelComponent, InputComponent, CheckboxComponent],
  imports: [CommonModule],
  exports: [ButtonComponent, TitleComponent, LabelComponent, InputComponent, CheckboxComponent],
})
export class UiModule {}
