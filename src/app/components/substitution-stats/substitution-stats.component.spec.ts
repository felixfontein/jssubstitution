import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubstitutionStatsComponent } from './substitution-stats.component';

describe('SubstitutionStatsComponent', () => {
  let component: SubstitutionStatsComponent;
  let fixture: ComponentFixture<SubstitutionStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubstitutionStatsComponent ]
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
