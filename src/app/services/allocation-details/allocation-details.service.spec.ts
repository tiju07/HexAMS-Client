import { TestBed } from '@angular/core/testing';

import { AllocationDetailsService } from './allocation-details.service';

describe('AllocationDetailsService', () => {
  let service: AllocationDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllocationDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
