import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  navTitle = '';
  constructor(public route: ActivatedRoute, public router: Router) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        let current = this.route;
        while (current.firstChild) {
          current = current.firstChild;
        }
        this.navTitle = current.snapshot.data['navTitle'] || 'Dashboard';
      });
  }
}
