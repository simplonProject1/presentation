import { TestBed, inject } from '@angular/core/testing';

import { ToggleviewService } from './toggleview.service';

describe('ToggleviewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToggleviewService]
    });
  });

  it('should be created', inject([ToggleviewService], (service: ToggleviewService) => {
    expect(service).toBeTruthy();
  }));
});
