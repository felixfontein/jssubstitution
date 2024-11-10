import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ViewTextDialogComponent } from "./view-text-dialog.component";
import { AppStateService } from "../../app/services/app-state.service";
import { MatDialogModule } from "@angular/material/dialog";
import { TranslocoRootModule } from "../../app/transloco-root.module";
import { HttpClientModule } from "@angular/common/http";

describe("ViewTextDialogComponent", () => {
  let component: ViewTextDialogComponent;
  let fixture: ComponentFixture<ViewTextDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewTextDialogComponent],
      providers: [AppStateService],
      imports: [MatDialogModule, TranslocoRootModule, HttpClientModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTextDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
