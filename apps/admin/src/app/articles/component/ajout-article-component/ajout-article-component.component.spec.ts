import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutArticleComponentComponent } from './ajout-article-component.component';

describe('AjoutArticleComponentComponent', () => {
  let component: AjoutArticleComponentComponent;
  let fixture: ComponentFixture<AjoutArticleComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AjoutArticleComponentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AjoutArticleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
