import { Component } from '@angular/core';
import { ANOTHER_ARTICLE, RELATED_ARTICLE } from '../../collection/article.collection';

@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.scss']
})
export class DetailArticleComponent {
  anotherArticle = structuredClone(ANOTHER_ARTICLE);
  relatedArticle = structuredClone(RELATED_ARTICLE);
}
