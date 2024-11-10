import { waitForAsync, ComponentFixture, TestBed } from "@angular/core/testing";

import { SubstitutionLetterComponent } from "./substitution-letter.component";

import { DisplayLetterPipe } from "../../pipes/display-letter.pipe";
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { TranslocoRootModule } from "../../transloco-root.module";
import { HttpClientModule } from "@angular/common/http";

describe("SubstitutionLetterComponent", () => {
  let component: SubstitutionLetterComponent;
  let fixture: ComponentFixture<SubstitutionLetterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayLetterPipe, SubstitutionLetterComponent],
      imports: [HttpClientModule, MatDialogModule, TranslocoRootModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubstitutionLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
