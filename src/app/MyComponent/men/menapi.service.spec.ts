import { TestBed } from '@angular/core/testing';

import { MenapiService } from './menapi.service';

describe('MenapiService', () => {
  let service: MenapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
