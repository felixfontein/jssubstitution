import { ComponentFixture, TestBed } from "@angular/core/testing";

import { LetterSelectorComponent } from "./letter-selector.component";
import { MAT_DIALOG_DATA, MatDialogModule } from "@angular/material/dialog";
import { AppStateService } from "../../services/app-state.service";
import { TranslocoRootModule } from "../../transloco-root.module";
import { HttpClientModule } from "@angular/common/http";
import { DisplayLetterPipe } from "../../pipes/display-letter.pipe";

describe("LetterSelectorComponent", () => {
  let component: LetterSelectorComponent;
  let fixture: ComponentFixture<LetterSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LetterSelectorComponent, DisplayLetterPipe],
      providers: [AppStateService, { provide: MAT_DIALOG_DATA, useValue: { letter: "A" } }],
      imports: [MatDialogModule, TranslocoRootModule, HttpClientModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LetterSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
