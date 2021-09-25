import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-head',
  template: '',
})
export class HeadComponent implements OnInit {

  @Input() title: string = '';

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    let fullTitle = this.title.length > 0
      ? `${this.title} | ${environment.app_name}`
      : environment.app_name;
    this.titleService.setTitle(fullTitle);
  }

}
