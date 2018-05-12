import { TestBed, inject } from '@angular/core/testing';

import { ToggleViewService } from './toggleview.service';

describe('ToggleviewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToggleViewService]
    });
  });

  it('should be created', inject([ToggleViewService], (service: ToggleViewService) => {
    expect(service).toBeTruthy();
  }));
});
