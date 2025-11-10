import { Component } from '@angular/core';
import { VictoriaNavigationGroupData } from '../sidenav/collection/nav.collection';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-menu-responsive',
  templateUrl: './menu-responsive.component.html',
  styleUrls: ['./menu-responsive.component.scss']
})
export class MenuResponsiveComponent {
  menuCollection = structuredClone(VictoriaNavigationGroupData);

  activeRoute = '';
  constructor(
    private router: Router,
  ) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.activeRoute = event.url;
      }
    });
  }

  goToPage(path: string) {
    this.router.navigate([path]);
  }
}
