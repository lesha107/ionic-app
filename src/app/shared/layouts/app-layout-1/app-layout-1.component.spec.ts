import { ComponentFixture, TestBed } from "@angular/core/testing";

import { AppLayout1Component } from "src/app/shared/layouts/app-layout-1/app-layout-1.component";

describe("AppLayoutComponent", () => {
  let component: AppLayout1Component;
  let fixture: ComponentFixture<AppLayout1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppLayout1Component]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLayout1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
