import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubstitutionStatsComponent } from './substitution-stats.component';
import { DisplayLetterPipe } from '../../pipes/display-letter.pipe';
import { MatDialogModule } from '@angular/material/dialog';

describe('SubstitutionStatsComponent', () => {
  let component: SubstitutionStatsComponent;
  let fixture: ComponentFixture<SubstitutionStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayLetterPipe, SubstitutionStatsComponent ],
      imports: [ MatDialogModule, ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubstitutionStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
