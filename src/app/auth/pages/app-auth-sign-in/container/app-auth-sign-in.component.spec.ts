import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AppAuthSignInComponent } from "src/app/auth/pages/app-auth-sign-in/container/app-auth-sign-in.component";

describe("AppAuthSignInComponent", () => {
  let component: AppAuthSignInComponent;
  let fixture: ComponentFixture<AppAuthSignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppAuthSignInComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAuthSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
