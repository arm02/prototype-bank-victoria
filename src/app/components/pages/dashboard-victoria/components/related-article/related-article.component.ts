import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-related-article',
  templateUrl: './related-article.component.html',
  styleUrls: ['./related-article.component.scss']
})
export class RelatedArticleComponent {
  @Input() imgUrl: string = './assets/bank-victoria/images/illust-related-article.png';
  @Input() title: string = 'Mengapa Web Development Penting di Era Digital?';
}
