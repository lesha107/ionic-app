import { TestBed } from "@angular/core/testing";

import { AppDialogService } from "src/app/core/services/app-dialog/app-dialog.service";

describe("AppDialogsService", () => {
  let service: AppDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppDialogService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
