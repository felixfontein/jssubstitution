import { waitForAsync, ComponentFixture, TestBed } from "@angular/core/testing";

import { LicenseViewerComponent } from "./license-viewer.component";
import { HttpClientModule } from "@angular/common/http";
import { TranslocoRootModule } from "../../transloco-root.module";
import { MatDialogModule } from "@angular/material/dialog";

describe("LicenseViewerComponent", () => {
  let component: LicenseViewerComponent;
  let fixture: ComponentFixture<LicenseViewerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LicenseViewerComponent],
      imports: [HttpClientModule, MatDialogModule, TranslocoRootModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LicenseViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
