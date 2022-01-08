import { TestBed } from '@angular/core/testing';

import { AppStateService } from './app-state.service';
import { MatDialogModule } from '@angular/material/dialog';
import { TranslocoRootModule } from '../transloco-root.module';
import { HttpClientModule } from '@angular/common/http';

describe('AppStateService', () => {
  let service: AppStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule, MatDialogModule, TranslocoRootModule ],
    });
    service = TestBed.inject(AppStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
