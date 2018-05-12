import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TpiComponent } from './tpi.component';

describe('TpiComponent', () => {
  let component: TpiComponent;
  let fixture: ComponentFixture<TpiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TpiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TpiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
