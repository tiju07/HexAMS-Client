import { TestBed } from '@angular/core/testing';

import { LastActivePageService } from './last-active-page.service';

describe('LastActivePageService', () => {
  let service: LastActivePageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LastActivePageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
