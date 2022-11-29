import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeArticleContainerComponent } from './liste-article-container.component';

describe('ListeArticleContainerComponent', () => {
  let component: ListeArticleContainerComponent;
  let fixture: ComponentFixture<ListeArticleContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListeArticleContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListeArticleContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
