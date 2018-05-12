import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApptioComponent } from './apptio.component';

describe('ApptioComponent', () => {
  let component: ApptioComponent;
  let fixture: ComponentFixture<ApptioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApptioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApptioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
