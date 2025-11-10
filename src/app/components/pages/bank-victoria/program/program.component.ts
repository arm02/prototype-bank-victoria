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

  coursesList = structuredClone(COURSES_LIST);

  imgUrl: string = './assets/bank-victoria/images/illust-related-article.png';
  title: string = 'Mengapa Web Development Penting di Era Digital?';

  toDetail() {
    this.router.navigate(['/lms/program/detail']);
  }
}
