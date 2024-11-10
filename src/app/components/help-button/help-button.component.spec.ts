import { waitForAsync, ComponentFixture, TestBed } from "@angular/core/testing";

import { HelpButtonComponent } from "./help-button.component";
import { MatDialogModule } from "@angular/material/dialog";
import { TranslocoRootModule } from "../../transloco-root.module";
import { HttpClientModule } from "@angular/common/http";

describe("HelpButtonComponent", () => {
  let component: HelpButtonComponent;
  let fixture: ComponentFixture<HelpButtonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HelpButtonComponent],
      imports: [HttpClientModule, MatDialogModule, TranslocoRootModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
