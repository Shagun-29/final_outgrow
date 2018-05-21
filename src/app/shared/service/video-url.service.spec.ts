import { TestBed, inject } from '@angular/core/testing';

import { VideoUrlService } from './video-url.service';

describe('VideoUrlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VideoUrlService]
    });
  });

  it('should be created', inject([VideoUrlService], (service: VideoUrlService) => {
    expect(service).toBeTruthy();
  }));
});
