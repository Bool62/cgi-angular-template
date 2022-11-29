import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeArticleComponentComponent } from './liste-article-component.component';

describe('ListeArticleComponentComponent', () => {
  let component: ListeArticleComponentComponent;
  let fixture: ComponentFixture<ListeArticleComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListeArticleComponentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListeArticleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
