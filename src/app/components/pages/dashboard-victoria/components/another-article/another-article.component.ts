import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-another-article',
  templateUrl: './another-article.component.html',
  styleUrls: ['./another-article.component.scss']
})
export class AnotherArticleComponent {
  @Input() imgUrl: string = './assets/bank-victoria/images/illust-related-article.png';
  @Input() title: string = 'Mengapa Web Development Penting di Era Digital?';
}
