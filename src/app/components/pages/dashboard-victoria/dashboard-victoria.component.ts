import { Component } from '@angular/core';
import { ANOTHER_ARTICLE, RELATED_ARTICLE } from './collection/article.collection';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-victoria',
  templateUrl: './dashboard-victoria.component.html',
  styleUrls: ['./dashboard-victoria.component.scss']
})
export class DashboardVictoriaComponent {
  anotherArticle = structuredClone(ANOTHER_ARTICLE);
  relatedArticle = structuredClone(RELATED_ARTICLE);

  constructor(private router: Router) {

  }

  goToDetailArticle() {
    this.router.navigate(['/lms/article/detail-article']);
  }
}
