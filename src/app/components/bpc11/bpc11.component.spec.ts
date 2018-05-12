import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bpc11Component } from './bpc11.component';

describe('Bpc11Component', () => {
  let component: Bpc11Component;
  let fixture: ComponentFixture<Bpc11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bpc11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bpc11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
