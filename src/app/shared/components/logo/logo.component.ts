import { Component, Input, OnInit } from '@angular/core';

type LogoVariant = 'large' | 'minimal';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent {
  private readonly _srcs: any = {
    large: "assets/logo.png",
    minimal: "assets/miniLogo.png",
  };
  @Input() variant: LogoVariant = 'large';
  @Input() alternativeText: string = '';
  @Input() dark: boolean = false;

  getSrc(): string {
    return this._srcs[this.variant];
  }

  getClassName(): object {
    return {
      'w-auto rounded': true,
      "bg-gray-700": this.dark,
      "bg-transparent": !this.dark,
      "px-6 py-2": this.variant === "large",
      "p-1": this.variant === "minimal",
    }
  }
}
