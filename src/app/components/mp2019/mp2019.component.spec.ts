import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mp2019Component } from './mp2019.component';

describe('Mp2019Component', () => {
  let component: Mp2019Component;
  let fixture: ComponentFixture<Mp2019Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mp2019Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mp2019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
