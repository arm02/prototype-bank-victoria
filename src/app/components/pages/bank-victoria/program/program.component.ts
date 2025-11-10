import { Component } from '@angular/core';
import { COURSES_LIST } from './program.collection';
import { Router } from '@angular/router';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss'],
})
export class ProgramComponent {
  constructor(private router: Router) {}
  openMenus: { [key: string]: boolean } = {
    dashboard: true,
    sitePages: true,
    myCourses: true,
  };
  courses = [
    'CSL577399',
    'CSL577398',
    'CSL577397',
    'CSL577396',
    'CSL577395',
    'CSL577394',
    'CSL577393',
    'CSL577392',
  ];

  coursesList = structuredClone(COURSES_LIST);

  imgUrl: string = './assets/bank-victoria/images/illust-related-article.png';
  title: string = 'Mengapa Web Development Penting di Era Digital?';

  toggleMenu(menu: string) {
    this.openMenus[menu] = !this.openMenus[menu];
  }

  isOpen(menu: string): boolean {
    return !!this.openMenus[menu];
  }

  toDetail() {
    this.router.navigate(['/lms/program/detail']);
  }
}
