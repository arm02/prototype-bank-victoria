import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedArticleComponent } from './related-article.component';

describe('RelatedArticleComponent', () => {
  let component: RelatedArticleComponent;
  let fixture: ComponentFixture<RelatedArticleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RelatedArticleComponent]
    });
    fixture = TestBed.createComponent(RelatedArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
