import { TestBed, inject } from '@angular/core/testing';

import { ToggleDisplayService } from './toggle-display.service';

describe('ToggleDisplayService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToggleDisplayService]
    });
  });

  it('should be created', inject([ToggleDisplayService], (service: ToggleDisplayService) => {
    expect(service).toBeTruthy();
  }));
});
