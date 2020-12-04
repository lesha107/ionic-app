import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AppAuthSignUpComponent } from "src/app/auth/pages/app-auth-sign-up/container/app-auth-sign-up.component";

describe("AppAuthSignUpComponent", () => {
  let component: AppAuthSignUpComponent;
  let fixture: ComponentFixture<AppAuthSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppAuthSignUpComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAuthSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
