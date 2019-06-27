import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutcompComponent } from './aboutcomp.component';

describe('AboutcompComponent', () => {
  let component: AboutcompComponent;
  let fixture: ComponentFixture<AboutcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
