import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Matrix1Component } from './matrix1.component';

describe('Matrix1Component', () => {
  let component: Matrix1Component;
  let fixture: ComponentFixture<Matrix1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Matrix1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Matrix1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
