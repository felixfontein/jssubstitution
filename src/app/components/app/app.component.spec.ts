import { waitForAsync, TestBed } from "@angular/core/testing";

import { AppComponent } from "./app.component";
import { MatDialogModule } from "@angular/material/dialog";
import { TranslocoRootModule } from "../../transloco-root.module";
import { HttpClientModule } from "@angular/common/http";

describe("AppComponent", () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [HttpClientModule, MatDialogModule, TranslocoRootModule],
    }).compileComponents();
  }));

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
