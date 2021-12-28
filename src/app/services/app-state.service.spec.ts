import { TestBed } from '@angular/core/testing';

import { AppStateService } from './app-state.service';
import { MatDialogModule } from '@angular/material/dialog';

describe('AppStateService', () => {
  let service: AppStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ MatDialogModule ],
    });
    service = TestBed.inject(AppStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
