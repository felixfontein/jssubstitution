import { waitForAsync, ComponentFixture, TestBed } from "@angular/core/testing";

import { HelpData, HelpDialogComponent } from "./help-dialog.component";
import { AppStateService } from "../../services/app-state.service";
import { MAT_DIALOG_DATA, MatDialogModule } from "@angular/material/dialog";
import { TranslocoRootModule } from "../../transloco-root.module";
import { HttpClientModule } from "@angular/common/http";

const EMPTY_HELP: HelpData = {
  title: "HELP.MAIN.TITLE",
  pages: [],
};

describe("HelpDialogComponent", () => {
  let component: HelpDialogComponent;
  let fixture: ComponentFixture<HelpDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HelpDialogComponent],
      providers: [AppStateService, { provide: MAT_DIALOG_DATA, useValue: EMPTY_HELP }],
      imports: [MatDialogModule, TranslocoRootModule, HttpClientModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
