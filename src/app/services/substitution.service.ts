
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef  } from '@angular/material/dialog';

import { BehaviorSubject, Observable, Subscription } from 'rxjs';

import { LetterSelectorComponent, LetterSelectorData } from '../components/letter-selector/letter-selector.component';

import { EMPTY_SUBSTITUTION, Substitution } from '../utils/substitution';


class LetterData {
  public readonly subject: BehaviorSubject<string | undefined>;
  public readonly observable: Observable<string | undefined>;

  private subscription: Subscription | undefined;

  public constructor() {
    this.subject = new BehaviorSubject<string | undefined>(undefined);
    this.observable = this.subject.asObservable();
  }

  public update(obs: Observable<string | undefined> | undefined): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = undefined;
    }
    if (obs) {
      this.subscription = obs.subscribe(value => this.subject.next(value));
    } else {
      this.subject.next(undefined);
    }
  }
}


class SplitData {
  public readonly subject: BehaviorSubject<string[]>;
  public readonly observable: Observable<string[]>;

  public constructor(splitted: string[]) {
    this.subject = new BehaviorSubject<string[]>(splitted);
    this.observable = this.subject.asObservable();
  }
}


@Injectable({
  providedIn: 'root'
})
export class SubstitutionService {
  private readonly substitution$: BehaviorSubject<Substitution>;
  public readonly substitution: Observable<Substitution>;

  private readonly hoverLetter$: BehaviorSubject<string | undefined>;
  public readonly hoverLetter: Observable<string | undefined>;

  private readonly letters: Map<string, LetterData>;
  private readonly splitters: Map<string, SplitData>;

  constructor(private readonly matDialogService: MatDialog) {
    this.substitution$ = new BehaviorSubject<Substitution>(EMPTY_SUBSTITUTION);
    this.substitution = this.substitution$.asObservable();
    this.letters = new Map<string, LetterData>();
    this.splitters = new Map<string, SplitData>();
    this.substitution$.subscribe(subs => this.updateSubstitution(subs));
    this.hoverLetter$ = new BehaviorSubject<string | undefined>(undefined);
    this.hoverLetter = this.hoverLetter$.asObservable();
    this.hoverLetter.subscribe(letter => console.log('hover', letter));
  }

  private updateSubstitution(subs: Substitution): void {
    this.letters.forEach((value, letter) => {
      value.update(subs.letterObservablesMap.get(letter));
    });
    this.splitters.forEach((value, letters) => {
      value.subject.next(subs.alphabet.splitAndNormalize(letters, true));
    });
  }

  private getLetterData(letter: string): LetterData {
    let result = this.letters.get(letter);
    if (!result) {
      result = new LetterData();
      result.update(this.substitution$.getValue().letterObservablesMap.get(letter));
      this.letters.set(letter, result);
    }
    return result;
  }

  public getObservable(letter: string): Observable<string | undefined> {
    return this.getLetterData(letter).observable;
  }

  public split(letters: string): string[] {
    return this.substitution$.getValue().alphabet.splitAndNormalize(letters, true);
  }

  public getSplitObservable(letters: string): Observable<string[]> {
    let result = this.splitters.get(letters);
    if (!result) {
      result = new SplitData(this.split(letters));
      this.splitters.set(letters, result);
    }
    return result.observable;
  }

  public setSubstitution(substitution: Substitution): void {
    this.substitution$.next(substitution);
  }

  public modifySubstitution(letter: string): void {
    const config: MatDialogConfig = {
      role: 'dialog',
      restoreFocus: true,
    };
    config.data = <LetterSelectorData>{
      letter: letter,
    };
    this.matDialogService.open(LetterSelectorComponent, config);
  }

  public getCurrent(): Substitution {
    return this.substitution$.getValue();
  }

  public hoverStart(letter: string): void {
    const newLetter = this.substitution$.getValue().lettersMap.has(letter) ? letter : undefined;
    if (this.hoverLetter$.getValue() !== newLetter) {
      this.hoverLetter$.next(newLetter);
    }
  }

  public hoverEnd(letter: string): void {
    if (this.hoverLetter$.getValue() === letter) {
      this.hoverLetter$.next(undefined);
    }
  }
}
