import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mp2020Component } from './mp2020.component';

describe('Mp2020Component', () => {
  let component: Mp2020Component;
  let fixture: ComponentFixture<Mp2020Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mp2020Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mp2020Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
