import { ComponentFixture, TestBed } from "@angular/core/testing";

import { KioskComponent } from "./kiosk.component";
import { MatDialogModule } from "@angular/material/dialog";
import { TranslocoRootModule } from "../../transloco-root.module";
import { HttpClientModule } from "@angular/common/http";

describe("KioskComponent", () => {
  let component: KioskComponent;
  let fixture: ComponentFixture<KioskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KioskComponent],
      imports: [HttpClientModule, MatDialogModule, TranslocoRootModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KioskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
