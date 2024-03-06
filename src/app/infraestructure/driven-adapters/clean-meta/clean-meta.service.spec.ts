import { TestBed } from '@angular/core/testing';

import { CleanMetaService } from './clean-meta.service';

describe('CleanMetaService', () => {
  let service: CleanMetaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CleanMetaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
