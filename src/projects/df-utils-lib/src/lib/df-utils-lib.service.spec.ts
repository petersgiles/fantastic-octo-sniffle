import { TestBed } from '@angular/core/testing';

import { DFUtilsLibService } from './df-utils-lib.service';

describe('DFUtilsLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DFUtilsLibService = TestBed.get(DFUtilsLibService);
    expect(service).toBeTruthy();
  });
});
