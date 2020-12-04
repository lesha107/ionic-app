import { ComponentFixture, TestBed } from "@angular/core/testing";

import { AppAdminExamplesComponent } from "src/app/admin/pages/app-admin-examples/container/app-admin-examples.component";

describe("AdminExamplesComponent", () => {
  let component: AppAdminExamplesComponent;
  let fixture: ComponentFixture<AppAdminExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppAdminExamplesComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAdminExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
