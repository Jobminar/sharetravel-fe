import { TestBed } from '@angular/core/testing';

import { SignUService } from './sign-u.service';

describe('SignUService', () => {
  let service: SignUService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignUService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
