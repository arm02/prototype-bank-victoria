import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherArticleComponent } from './another-article.component';

describe('AnotherArticleComponent', () => {
  let component: AnotherArticleComponent;
  let fixture: ComponentFixture<AnotherArticleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnotherArticleComponent]
    });
    fixture = TestBed.createComponent(AnotherArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
