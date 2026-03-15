import { TestBed } from '@angular/core/testing';

import { UserCheck } from './user-check';

describe('UserCheck', () => {
  let service: UserCheck;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserCheck);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
