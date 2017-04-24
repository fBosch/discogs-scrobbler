import { TestBed, inject } from '@angular/core/testing';
import { DiscogsService } from './discogs.service';

describe('DiscogsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DiscogsService]
    });
  });

  it('should ...', inject([DiscogsService], (service: DiscogsService) => {
    expect(service).toBeTruthy();
  }));
});
