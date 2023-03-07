import { TestBed } from '@angular/core/testing';

import { TvTmdbService } from './tv-tmdb.service';

describe('TvTmdbService', () => {
  let service: TvTmdbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TvTmdbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
