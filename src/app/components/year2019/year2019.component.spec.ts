import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Year2019Component } from './year2019.component';

describe('Year2019Component', () => {
  let component: Year2019Component;
  let fixture: ComponentFixture<Year2019Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Year2019Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Year2019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
