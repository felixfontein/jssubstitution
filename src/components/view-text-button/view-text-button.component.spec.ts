import { waitForAsync, ComponentFixture, TestBed } from "@angular/core/testing";

import { ViewTextButtonComponent } from "./view-text-button.component";
import { HttpClientModule } from "@angular/common/http";
import { MatDialogModule } from "@angular/material/dialog";
import { TranslocoRootModule } from "../../app/transloco-root.module";

describe("ViewTextButtonComponent", () => {
  let component: ViewTextButtonComponent;
  let fixture: ComponentFixture<ViewTextButtonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ViewTextButtonComponent],
      imports: [HttpClientModule, MatDialogModule, TranslocoRootModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTextButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
