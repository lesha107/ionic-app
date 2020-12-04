import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AppAdminExampleTableComponent } from "src/app/admin/pages/app-admin-examples/pages/app-admin-example-table/container/app-admin-example-table.component";

describe("AppAdminExampleTableComponent", () => {
  let component: AppAdminExampleTableComponent;
  let fixture: ComponentFixture<AppAdminExampleTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppAdminExampleTableComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAdminExampleTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
