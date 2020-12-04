import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AppAdminExampleDialogComponent } from "src/app/admin/pages/app-admin-examples/pages/app-admin-example-dialog/container/app-admin-example-dialog.component";

describe("AppAdminExampleDialogComponent", () => {
  let component: AppAdminExampleDialogComponent;
  let fixture: ComponentFixture<AppAdminExampleDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppAdminExampleDialogComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAdminExampleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
