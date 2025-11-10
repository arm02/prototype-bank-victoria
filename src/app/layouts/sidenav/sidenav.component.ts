import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import {
  Navigation,
  NavigationData,
  NavigationGroup,
  VictoriaNavigationGroupData,
} from './collection/nav.collection';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { AuthCheckRequestCollection } from 'src/app/collection/auth.collection';
import { MatDialog } from '@angular/material/dialog';
import { ForgotPasswordComponent } from 'src/app/auth/change-password/change-password.component';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { LayoutsService } from '../layouts.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav-new.component.html',
  styleUrls: ['./sidenav-new.component.scss'],
  animations: [
    trigger('sidebarAnimation', [
      state(
        'expanded',
        style({
          width: '280px',
          minWidth: '280px',
        })
      ),
      state(
        'collapsed',
        style({
          width: '80px',
          minWidth: '80px',
        })
      ),
      transition(
        'expanded <=> collapsed',
        animate('150ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
    trigger('groupToggle', [
      state(
        'collapsed',
        style({
          transform: 'rotateX(0deg)',
          opacity: 1,
        })
      ),
      state(
        'expanded',
        style({
          transform: 'rotateX(0deg)',
          opacity: 1,
        })
      ),
      transition('collapsed <=> expanded', animate('100ms ease-in-out')),
    ]),
    trigger('slideInOut', [
      transition(':enter', [
        style({
          height: '0px',
          opacity: 0,
          overflow: 'hidden',
        }),
        animate(
          '300ms ease-out',
          style({
            height: '*',
            opacity: 1,
          })
        ),
      ]),
      transition(':leave', [
        animate(
          '250ms ease-in',
          style({
            height: '0px',
            opacity: 0,
            overflow: 'hidden',
          })
        ),
      ]),
    ]),
  ],
})
export class SidenavComponent {
  navigation: Navigation[] = NavigationData;
  navigationGroups: NavigationGroup[] = VictoriaNavigationGroupData;
  activeRoute = '';
  userCheckData: AuthCheckRequestCollection = new AuthCheckRequestCollection();
  expandedGroups: { [key: string]: boolean } = {};
  isExpanded = true;
  hoveredItem: string | null = null;
  hoveredGroup: string | null = null;
  private closeTimer: any = null;
  constructor(
    private router: Router,
    private authService: AuthService,
    private dialog: MatDialog,
    private layoutService: LayoutsService,
  ) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.activeRoute = event.url.split('/')[2];
      }
    });
    // this.authService
    //   .authCheck()
    //   .subscribe((data: AuthCheckRequestCollection) => {
    //     this.userCheckData = data;
    //   });

    // Initialize body class
    this.updateBodyClass();
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/auth/login']);
  }

  help() {
    window.open('https://wa.me/6287872753959', '_blank');
  }

  changePassword() {
    const dialogRef = this.dialog.open(ForgotPasswordComponent, {
      disableClose: true,
      width: '400px',
    });
    dialogRef.afterClosed().subscribe();
  }

  toggleGroup(group: NavigationGroup) {
    const groupTitle = group.groupTitle;
    if (group.items.length === 0) {
      this.router.navigate([group.path || '/']);
    }
    const isExpanded = this.expandedGroups[groupTitle];
    Object.keys(this.expandedGroups).forEach((key) => {
      this.expandedGroups[key] = false;
    });
    this.expandedGroups[groupTitle] = !isExpanded;
  }

  isGroupExpanded(group: NavigationGroup): boolean {
    const groupTitle = group.groupTitle;
      console.log(this.router.url.split('/')[2]);
    if (group.items.length !== 0) {
      return this.expandedGroups[groupTitle] || false;
    }else if(this.router.url.split('/')[2] === undefined && group.groupTitle === 'Beranda') {
      return true;
    } else if (group.active === this.router.url.split('/')[2]) {
      return true;
    }

    return false;
  }

  hasVisibleItems(group: NavigationGroup): boolean {
    if (group.isVisible) return true;
    return group.items.some(
      (item) =>
        item.role === 'all' ||
        item.role === this.userCheckData.role ||
        this.userCheckData.role === 'admin'
    );
  }

  // collapsedSidebar() {
  //   this.isCollapsed = !this.isCollapsed;
  // }

  // setChildHover(groupTitle: string, isHovered: boolean) {
  //   this.expandedGroups[groupTitle + '_child_hover'] = isHovered;
  // }

  // onSidebarMouseEnter() {
  //   this.isHovered = false;
  //   this.updateBodyClass();
  // }

  // onSidebarMouseLeave() {
  //   this.isHovered = true;
  //   this.updateBodyClass();
  // }

  updateBodyClass() {
    this.isExpanded = !this.isExpanded;
    this.layoutService.setIsExpanded(this.isExpanded);
    const body = document.body;
    if (this.isExpanded) {
      body.classList.add('sidebar-collapsed');
      body.classList.remove('sidebar-expanded');
    } else {
      body.classList.add('sidebar-expanded');
      body.classList.remove('sidebar-collapsed');
    }
  }

  onParentEnter(title: string) {
    this.cancelClose();
    if (this.isExpanded) this.hoveredGroup = title;
  }

  scheduleClose(delay = 150) {
    this.cancelClose();
    this.closeTimer = setTimeout(() => {
      this.hoveredGroup = null;
    }, delay);
  }

  cancelClose() {
    if (this.closeTimer) {
      clearTimeout(this.closeTimer);
      this.closeTimer = null;
    }
  }

  shouldShowChildren(group: NavigationGroup): boolean {
    const title = group.groupTitle;
    if (!this.isExpanded) return this.isGroupExpanded(group);
    return this.hoveredGroup === title;
  }
}
