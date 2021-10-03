import { Component, Input, OnInit } from '@angular/core';

type InputType = 'text' | 'password' | 'email';

@Component({
  selector: 'ui-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  @Input() id: string = '';
  @Input() name: string = '';
  @Input() type: InputType = 'text';
  @Input() class: string = '';
  @Input() required: boolean = true;
  @Input() readonly: boolean = false;

  getClassName(): object {
    return {
      [this.class]: true,
      "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm": true,
      "placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm": true,
    }
  }
}
