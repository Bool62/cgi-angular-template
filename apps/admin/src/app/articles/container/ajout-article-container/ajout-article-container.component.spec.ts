import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutArticleContainerComponent } from './ajout-article-container.component';

describe('AjoutArticleContainerComponent', () => {
  let component: AjoutArticleContainerComponent;
  let fixture: ComponentFixture<AjoutArticleContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AjoutArticleContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AjoutArticleContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
