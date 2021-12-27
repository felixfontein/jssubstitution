import { Component, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Observable } from 'rxjs';

import { SubstitutionService } from '../../services/substitution.service';

@Component({
  selector: 'app-substitution-letter',
  templateUrl: './substitution-letter.component.html',
  styleUrls: ['./substitution-letter.component.scss']
})
export class SubstitutionLetterComponent implements OnChanges {
  @Input()
  public letter: string = '';

  public translated: Observable<string | undefined>;

  constructor(private readonly substitution: SubstitutionService) {
    this.translated = new Observable<string | undefined>();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.translated = this.substitution.getObservable(this.letter);
  }

  @HostListener('click')
  onClick(): void {
    this.substitution.modifySubstitution(this.letter);
  }
}
