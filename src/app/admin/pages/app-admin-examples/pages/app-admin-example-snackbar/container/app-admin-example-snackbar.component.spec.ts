import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AppAdminExampleSnackbarComponent } from "src/app/admin/pages/app-admin-examples/pages/app-admin-example-snackbar/container/app-admin-example-snackbar.component";

describe("AppAdminExampleSnackbarComponent", () => {
  let component: AppAdminExampleSnackbarComponent;
  let fixture: ComponentFixture<AppAdminExampleSnackbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppAdminExampleSnackbarComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAdminExampleSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
