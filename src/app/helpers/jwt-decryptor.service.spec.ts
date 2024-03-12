import { TestBed } from '@angular/core/testing';

import { JwtDecryptorService } from './jwt-decryptor.service';

describe('JwtDecryptorService', () => {
  let service: JwtDecryptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JwtDecryptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
