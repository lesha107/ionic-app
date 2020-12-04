import { ComponentFixture, TestBed } from "@angular/core/testing";

import { AppSkeletonComponent } from "./app-skeleton.component";

describe("AppSkeletonComponent", () => {
  let component: AppSkeletonComponent;
  let fixture: ComponentFixture<AppSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppSkeletonComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
