import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponentComponent } from './contact-component.component';

describe('ContactComponentComponent', () => {
  let component: ContactComponentComponent;
  let fixture: ComponentFixture<ContactComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.contact();
    expect(component).toBeTruthy();
  });
});
