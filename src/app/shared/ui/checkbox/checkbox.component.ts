import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {

  @Input() id: string = '';
  @Input() name: string = '';
  @Input() class: string = '';
  @Input() required: boolean = true;
  @Input() readonly: boolean = false;

}
