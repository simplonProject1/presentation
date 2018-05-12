import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ppm2019Component } from './ppm2019.component';

describe('Ppm2019Component', () => {
  let component: Ppm2019Component;
  let fixture: ComponentFixture<Ppm2019Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ppm2019Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ppm2019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
