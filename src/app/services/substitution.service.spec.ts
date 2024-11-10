import { TestBed } from "@angular/core/testing";

import { SubstitutionService } from "./substitution.service";
import { MatDialogModule } from "@angular/material/dialog";

describe("SubstitutionService", () => {
  let service: SubstitutionService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [MatDialogModule] });
    service = TestBed.inject(SubstitutionService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
