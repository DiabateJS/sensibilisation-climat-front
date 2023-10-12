import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BilanQuizComponent } from './bilan-quiz.component';

describe('BilanQuizComponent', () => {
  let component: BilanQuizComponent;
  let fixture: ComponentFixture<BilanQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BilanQuizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BilanQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
