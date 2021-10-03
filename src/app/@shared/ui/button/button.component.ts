import { Component, EventEmitter, Input, Output } from '@angular/core';

type ButtonType = 'button' | 'submit';
type ButtonSize = 'small' | 'medium' | 'large';
type ButtonVariant = 'primary' | 'secondary' | 'outlined';

@Component({
  selector: 'ui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  private readonly _paddings: any = {
    large: "py-2 px-4 text-sm font-medium",
    medium: "py-2 px-4 text-sm font-medium",
    small: "py-2 px-4 text-sm font-medium",
  };

  @Input() label: string = 'This is a button';
  @Input() type: ButtonType = 'button';
  @Input() size: ButtonSize = 'medium';
  @Input() variant: ButtonVariant = 'primary';
  @Input() disabled: boolean = false;
  @Output() onClick: EventEmitter<any> = new EventEmitter<any>();

  getClassName(): object {
    return {
      [`whitespace-nowrap ${this._paddings[this.size]} w-full flex justify-center
      border border-transparent rounded-md shadow-sm disabled:opacity-25
      disabled:pointer-events-none disabled:cursor-not-allowed text-white bg-indigo-600`] : true,
      "hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500": this.variant === 'primary'
    }
  }

  clickHandler(event: Event): void {
    this.onClick.emit(event);
  }
}
