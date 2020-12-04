import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AppAdminExampleDragAndDropComponent } from "src/app/admin/pages/app-admin-examples/pages/app-admin-example-drag-and-drop/container/app-admin-example-drag-and-drop.component";

describe("AppAdminExampleCalendarComponent", () => {
  let component: AppAdminExampleDragAndDropComponent;
  let fixture: ComponentFixture<AppAdminExampleDragAndDropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppAdminExampleDragAndDropComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAdminExampleDragAndDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
