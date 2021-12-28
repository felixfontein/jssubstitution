import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterSelectorComponent } from './letter-selector.component';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { AppStateService } from '../../services/app-state.service';

describe('LetterSelectorComponent', () => {
  let component: LetterSelectorComponent;
  let fixture: ComponentFixture<LetterSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetterSelectorComponent ],
      providers: [
        AppStateService,
        { provide: MAT_DIALOG_DATA, useValue: {} },
      ],
      imports: [ MatDialogModule ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LetterSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
