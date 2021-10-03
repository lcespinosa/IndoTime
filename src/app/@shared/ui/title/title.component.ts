import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ui-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent {
  private readonly _sizes: string[] = ['text-4xl', 'text-3xl', 'text-2xl', 'text-xl', 'text-lg'];
  @Input() level: number = 1;
  @Input() class: string = '';
  @Input() title: string = '';

  getClassName(): object {
    return {
      [this.class]: true,
      [`font-extrabold text-gray-900 ${this._sizes[this.level - 1]}`]: true,
    };
  }
}
