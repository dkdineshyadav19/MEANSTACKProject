import { TestBed } from '@angular/core/testing';

import { FashionapiService } from './fashionapi.service';

describe('FashionapiService', () => {
  let service: FashionapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FashionapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
