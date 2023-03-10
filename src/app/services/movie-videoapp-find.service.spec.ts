import { TestBed } from '@angular/core/testing';

import { MovieVideoappFindService } from './movie-videoapp-find.service';

describe('MovieVideoappFindServiceTsService', () => {
  let service: MovieVideoappFindService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieVideoappFindService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
