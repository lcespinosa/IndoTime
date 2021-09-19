import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  getDigitButtonClasses(): object {
    return {
      "inline-flex justify-center py-3 px-6 border border-gray-300 rounded-md shadow-sm bg-white": true,
      "text-sm font-medium text-gray-500 hover:bg-gray-50 cursor-pointer": true,
    }
  }

  onClick(event: Event): void {
  }
}
