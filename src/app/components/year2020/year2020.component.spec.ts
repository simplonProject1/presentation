import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Year2020Component } from './year2020.component';

describe('Year2020Component', () => {
  let component: Year2020Component;
  let fixture: ComponentFixture<Year2020Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Year2020Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Year2020Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
