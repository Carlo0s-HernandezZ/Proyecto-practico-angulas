import { TestBed } from '@angular/core/testing';

import { IniciodesesionService } from './iniciodesesion.service';

describe('IniciodesesionService', () => {
  let service: IniciodesesionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IniciodesesionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
