import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseViewerComponent } from './license-viewer.component';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from '../../transloco-root.module';

describe('LicenseViewerComponent', () => {
  let component: LicenseViewerComponent;
  let fixture: ComponentFixture<LicenseViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenseViewerComponent ],
      imports: [ HttpClientModule, TranslocoRootModule ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LicenseViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
