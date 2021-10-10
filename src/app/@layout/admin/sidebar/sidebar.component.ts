import { Component, OnInit } from '@angular/core';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

import { GlobalConstants } from '@shared';

interface NavigationItem {
  title: string;
  href: string;
  icon: any;
  active: boolean;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  navigationItems: NavigationItem[] = [
    {
      title: marker('Dashboard'),
      href: GlobalConstants.SITE_MAP.DASHBOARD,
      icon: 'hero-home',
      active: true,
    },
    {
      title: marker('Tickets'),
      href: GlobalConstants.SITE_MAP.TICKETS,
      icon: 'hero-ticket',
      active: false,
    },
    {
      title: marker('Employees'),
      href: GlobalConstants.SITE_MAP.EMPLOYEES,
      icon: 'hero-user-group',
      active: false,
    },
    {
      title: marker('Settings'),
      href: GlobalConstants.SITE_MAP.SETTINGS,
      icon: 'hero-adjustments',
      active: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
