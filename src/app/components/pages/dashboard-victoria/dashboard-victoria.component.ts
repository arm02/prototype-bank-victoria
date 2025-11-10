import { Component } from '@angular/core';
import { ARTICLE_RELATED } from './collection/article.collection';

@Component({
  selector: 'app-dashboard-victoria',
  templateUrl: './dashboard-victoria.component.html',
  styleUrls: ['./dashboard-victoria.component.scss']
})
export class DashboardVictoriaComponent {
  articleRelated = structuredClone(ARTICLE_RELATED);
}
