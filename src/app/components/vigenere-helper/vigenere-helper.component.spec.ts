import { waitForAsync, ComponentFixture, TestBed } from "@angular/core/testing";

import { VigenereHelperComponent } from "./vigenere-helper.component";
import { HttpClientModule } from "@angular/common/http";
import { TranslocoRootModule } from "../../transloco-root.module";
import { FormsModule } from "@angular/forms";

describe("VigenereHelperComponent", () => {
  let component: VigenereHelperComponent;
  let fixture: ComponentFixture<VigenereHelperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [VigenereHelperComponent],
      imports: [FormsModule, HttpClientModule, TranslocoRootModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VigenereHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
