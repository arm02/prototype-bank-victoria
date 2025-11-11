import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, Subject, takeUntil } from 'rxjs';
import { LayoutsService } from '../layouts.service';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { NotificationComponent } from 'src/app/components/pages/bank-victoria/notification/notification.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  navTitle = '';
  isExpanded = false;
  private ngUnsubscribe = new Subject<void>();
  constructor(public route: ActivatedRoute, public router: Router, private layoutService: LayoutsService, private bottomSheet: MatBottomSheet) { }

  ngOnInit(): void {
    this.setNavTitle(this.route);
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd), takeUntil(this.ngUnsubscribe))
      .subscribe(() => {
        this.setNavTitle(this.route);
      });

    this.layoutService.isExpanded.pipe(takeUntil(this.ngUnsubscribe)).subscribe({
      next: (value) => {
        this.isExpanded = value;
      }
    })
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  private setNavTitle(route: ActivatedRoute): void {
    let current = route;
    while (current.firstChild) {
      current = current.firstChild;
    }
    this.navTitle = current.snapshot.data['navTitle'] || 'Beranda';
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/auth/login']);
  }

  openNotification() {
    this.bottomSheet.open(NotificationComponent, {
      panelClass: 'full-height-bottom-sheet',
    });
  }
}

