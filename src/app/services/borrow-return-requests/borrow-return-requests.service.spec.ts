import { TestBed } from '@angular/core/testing';

import { BorrowReturnRequestsService } from './borrow-return-requests.service';

describe('BorrowReturnRequestsService', () => {
  let service: BorrowReturnRequestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BorrowReturnRequestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
