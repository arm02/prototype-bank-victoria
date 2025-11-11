import { Component, OnDestroy, OnInit } from '@angular/core';
import { Location } from '@angular/common';
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
  showBack = false;
  isExpanded = false;
  private ngUnsubscribe = new Subject<void>();
  constructor(
    public route: ActivatedRoute, 
    public router: Router, 
    private layoutService: LayoutsService, 
    private bottomSheet: MatBottomSheet, 
    private location: Location
  ) { }

  ngOnInit(): void {
    this.setAttributeRoute(this.route);
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd), takeUntil(this.ngUnsubscribe))
      .subscribe(() => {
        this.setAttributeRoute(this.route);
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

  private setAttributeRoute(route: ActivatedRoute): void {
    let current = route;
    while (current.firstChild) {
      current = current.firstChild;
    }
    this.navTitle = current.snapshot.data['navTitle'] || 'Beranda';
    this.showBack = current.snapshot.data['showBack'] || false;
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/auth/login']);
  }

  openNotification() {
    this.bottomSheet.open(NotificationComponent, {
      panelClass: 'full-height-bottom-sheet',
      data: {
        type: 'notification'
      }
    });
  }

  openProfile() {
    this.bottomSheet.open(NotificationComponent, {
      panelClass: 'full-height-bottom-sheet',
      data: {
        type: 'profile'
      }
    });
  }

  goBack(): void {
    // Memanggil metode back() pada objek Location
    this.location.back();
  }
}

