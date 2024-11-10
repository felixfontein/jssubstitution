import { waitForAsync, ComponentFixture, TestBed } from "@angular/core/testing";

import { SimpleSubstitutionHelperComponent } from "./simple-substitution-helper.component";
import { TranslocoRootModule } from "../../transloco-root.module";
import { HttpClientModule } from "@angular/common/http";

describe("SimpleSubstitutionHelperComponent", () => {
  let component: SimpleSubstitutionHelperComponent;
  let fixture: ComponentFixture<SimpleSubstitutionHelperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SimpleSubstitutionHelperComponent],
      imports: [HttpClientModule, TranslocoRootModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleSubstitutionHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
