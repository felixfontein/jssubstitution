import { ComponentFixture, TestBed } from "@angular/core/testing";

import { KioskConfirmDialogComponent } from "./kiosk-confirm-dialog.component";
import { AppStateService } from "../../app/services/app-state.service";
import { MAT_DIALOG_DATA, MatDialogModule } from "@angular/material/dialog";
import { TranslocoRootModule } from "../../app/transloco-root.module";
import { HttpClientModule } from "@angular/common/http";

describe("KioskConfirmDialogComponent", () => {
  let component: KioskConfirmDialogComponent;
  let fixture: ComponentFixture<KioskConfirmDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KioskConfirmDialogComponent],
      providers: [AppStateService],
      imports: [MatDialogModule, TranslocoRootModule, HttpClientModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KioskConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
