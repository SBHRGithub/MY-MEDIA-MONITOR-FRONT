import { TestBed } from '@angular/core/testing';

import { MovieTMDBService } from './movie-tmdb.service';

describe('MovieTMDBService', () => {
  let service: MovieTMDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieTMDBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
