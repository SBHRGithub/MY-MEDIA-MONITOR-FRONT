import { TestBed } from '@angular/core/testing';

import { TvVideoappFindService } from './tv-videoapp-find.service';

describe('TvVideoappFindService', () => {
  let service: TvVideoappFindService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TvVideoappFindService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
