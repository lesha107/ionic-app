import { ComponentFixture, TestBed } from "@angular/core/testing";

import { AppAdminExampleCalendarComponent } from "src/app/admin/pages/app-admin-examples/pages/app-admin-example-calendar/container/app-admin-example-calendar.component";

describe("AppAdminExampleCalendarComponent", () => {
  let component: AppAdminExampleCalendarComponent;
  let fixture: ComponentFixture<AppAdminExampleCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppAdminExampleCalendarComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAdminExampleCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
