import { TestBed } from "@angular/core/testing";

import { AppConfigService } from "src/app/core/services/app-config/app-config.service";

describe("AppConfigService", () => {
  let service: AppConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppConfigService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
