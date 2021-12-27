import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubstitutionLetterComponent } from './substitution-letter.component';

import { DisplayLetterPipe } from '../../pipes/display-letter.pipe';


describe('SubstitutionLetterComponent', () => {
  let component: SubstitutionLetterComponent;
  let fixture: ComponentFixture<SubstitutionLetterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayLetterPipe, SubstitutionLetterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubstitutionLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
