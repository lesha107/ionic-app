import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AppAuthResetPasswordComponent } from "src/app/auth/pages/app-auth-reset-password/container/app-auth-reset-password.component";

describe("AppAuthResetPasswordComponent", () => {
  let component: AppAuthResetPasswordComponent;
  let fixture: ComponentFixture<AppAuthResetPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppAuthResetPasswordComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAuthResetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
