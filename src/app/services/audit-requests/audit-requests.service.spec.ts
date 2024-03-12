import { TestBed } from '@angular/core/testing';

import { AuditRequestsService } from './audit-requests.service';

describe('AuditRequestsService', () => {
  let service: AuditRequestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuditRequestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
