import { TestBed } from '@angular/core/testing';

import { TvVideoappUpdateService } from './tv-videoapp-update.service';

describe('TvVideoappUpdateService', () => {
  let service: TvVideoappUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TvVideoappUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
