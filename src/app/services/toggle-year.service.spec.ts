import { TestBed, inject } from '@angular/core/testing';

import { ToggleYearService } from './toggle-year.service';

describe('ToggleYearService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToggleYearService]
    });
  });

  it('should be created', inject([ToggleYearService], (service: ToggleYearService) => {
    expect(service).toBeTruthy();
  }));
});
