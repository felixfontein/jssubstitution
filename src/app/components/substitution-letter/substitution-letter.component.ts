import { Component, HostBinding, HostListener, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';

import { Observable, Subscription, of } from 'rxjs';

import { AppStateService } from '../../services/app-state.service';
import { SubstitutionService } from '../../services/substitution.service';

@Component({
  selector: 'app-substitution-letter',
  templateUrl: './substitution-letter.component.html',
  styleUrls: ['./substitution-letter.component.scss']
})
export class SubstitutionLetterComponent implements OnChanges, OnDestroy {
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

  @HostBinding('class.hovering')
  public hovering: boolean = false;

  private hoveringSubs: Subscription;

  public translated: Observable<string | undefined>;

  constructor(private readonly substitution: SubstitutionService,
              private readonly appState: AppStateService) {
    this.translated = new Observable<string | undefined>();
    this.hoveringSubs = this.substitution.hoverLetter.subscribe(
      letter => this.hovering = (letter === this.letter)
    );
  }

  public ngOnDestroy(): void {
    this.hoveringSubs.unsubscribe();
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
    this.appState.informUIActivity();
    if (this.isSubstitutable) {
      this.substitution.modifySubstitution(this.letter);
    }
  }

  @HostListener('mouseenter')
  onMouseOver() {
    this.substitution.hoverStart(this.letter);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.substitution.hoverEnd(this.letter);
  }
}
