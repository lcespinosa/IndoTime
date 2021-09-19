import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ui-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent {

  @Input() label: string = '';
  @Input() htmlFor: string = '';

}
