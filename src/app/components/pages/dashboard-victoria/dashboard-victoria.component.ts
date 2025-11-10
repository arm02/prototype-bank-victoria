import { Component } from '@angular/core';
import { ANOTHER_ARTICLE, RELATED_ARTICLE } from './collection/article.collection';

@Component({
  selector: 'app-dashboard-victoria',
  templateUrl: './dashboard-victoria.component.html',
  styleUrls: ['./dashboard-victoria.component.scss']
})
export class DashboardVictoriaComponent {
  anotherArticle = structuredClone(ANOTHER_ARTICLE);
  relatedArticle = structuredClone(RELATED_ARTICLE);
}
