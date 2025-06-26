import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { iniciosesionGuard } from './iniciosesion.guard';

describe('iniciosesionGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => iniciosesionGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
