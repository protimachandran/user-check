import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserCheckComponent } from './user-check';


describe('UserCheck', () => {
  let component: UserCheckComponent;
  let fixture: ComponentFixture<UserCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserCheckComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCheckComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
