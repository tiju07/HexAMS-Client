import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { generalGuard } from './general.guard';

describe('generalGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => generalGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
