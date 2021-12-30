import { Component, HostBinding, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Observable, of } from 'rxjs';

import { SubstitutionService } from '../../services/substitution.service';

@Component({
  selector: 'app-substitution-letter',
  templateUrl: './substitution-letter.component.html',
  styleUrls: ['./substitution-letter.component.scss']
})
export class SubstitutionLetterComponent implements OnChanges {
  @Input()
  public letter: string = '';

  @Input()
  public isSubstitutable: boolean = true;

  @HostBinding('class.is-subs')
  public get isSubs() {
    return this.isSubstitutable;
  }

  @HostBinding('attr.tabindex')
  public get getTabindex(): string | undefined {
    return this.isSubstitutable ? '0' : undefined;
  }

  @HostBinding('attr.aria-role')
  public get getAriaRole(): string | undefined {
    return this.isSubstitutable ? 'button' : undefined;
  }

  public translated: Observable<string | undefined>;

  constructor(private readonly substitution: SubstitutionService) {
    this.translated = new Observable<string | undefined>();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.isSubstitutable) {
      this.translated = this.substitution.getObservable(this.letter);
    } else {
      this.translated = of(this.letter);
    }
  }

  @HostListener('click')
  onClick(): void {
    if (this.isSubstitutable) {
      this.substitution.modifySubstitution(this.letter);
    }
  }
}
