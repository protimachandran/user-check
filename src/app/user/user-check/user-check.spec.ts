import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCheck } from './user-check';

describe('UserCheck', () => {
  let component: UserCheck;
  let fixture: ComponentFixture<UserCheck>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserCheck]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCheck);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
