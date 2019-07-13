import { TestBed } from '@angular/core/testing';

import { OuthService } from './outh.service';

describe('OuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OuthService = TestBed.get(OuthService);
    expect(service).toBeTruthy();
  });
});
