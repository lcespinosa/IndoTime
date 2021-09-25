import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title) { }

  ngOnInit() {
    this.router.events.pipe(
        filter(event => event instanceof NavigationEnd),
      ).subscribe(() => {
        const route = this.getChild(this.activatedRoute);
        route.data.subscribe((data: { title: string; }) => {
          let fullTitle = data.title.length > 0
            ? `${data.title} | ${environment.app_name}`
            : environment.app_name;
          this.titleService.setTitle(fullTitle)});
      });
  }

  getChild(activatedRoute: ActivatedRoute): any {
    if (activatedRoute.firstChild) {
      return this.getChild(activatedRoute.firstChild);
    } else {
      return activatedRoute;
    }
  }
}
