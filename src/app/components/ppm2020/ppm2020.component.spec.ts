import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ppm2020Component } from './ppm2020.component';

describe('Ppm2020Component', () => {
  let component: Ppm2020Component;
  let fixture: ComponentFixture<Ppm2020Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ppm2020Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ppm2020Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
