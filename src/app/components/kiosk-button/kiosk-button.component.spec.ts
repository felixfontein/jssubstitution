import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KioskButtonComponent } from './kiosk-button.component';
import { MatDialogModule } from '@angular/material/dialog';
import { TranslocoRootModule } from '../../transloco-root.module';
import { HttpClientModule } from '@angular/common/http';

describe('KioskButtonComponent', () => {
  let component: KioskButtonComponent;
  let fixture: ComponentFixture<KioskButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KioskButtonComponent ],
      imports: [ HttpClientModule, MatDialogModule, TranslocoRootModule ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KioskButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
