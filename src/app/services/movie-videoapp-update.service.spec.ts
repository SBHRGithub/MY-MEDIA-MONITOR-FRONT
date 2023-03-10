import { TestBed } from '@angular/core/testing';

import { MovieVideoappUpdateService } from './movie-videoapp-update.service';

describe('MovieVideoappUpdateService', () => {
  let service: MovieVideoappUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieVideoappUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
