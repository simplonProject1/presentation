import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Year2018Component } from './year2018.component';

describe('Year2018Component', () => {
  let component: Year2018Component;
  let fixture: ComponentFixture<Year2018Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Year2018Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Year2018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
