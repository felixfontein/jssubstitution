import { Component, Inject, OnDestroy } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

import { Observable, Subscription, of, BehaviorSubject } from "rxjs";

import { AppStateService } from "../../services/app-state.service";
import { BaseActivityReporterComponent } from "../base-activity-reporter.component";
import { SubstitutionService } from "../../services/substitution.service";

export interface LetterSelectorData {
  letter: string;
}

@Component({
  selector: "app-letter-selector",
  templateUrl: "./letter-selector.component.html",
  styleUrls: ["./letter-selector.component.scss"],
})
export class LetterSelectorComponent extends BaseActivityReporterComponent implements OnDestroy {
  private readonly subs: Subscription[] = [];

  private readonly current: Map<string, string | undefined>;
  private readonly used: Map<string, BehaviorSubject<boolean>>;

  public readonly letter: string;
  public readonly letters: ReadonlyArray<string | undefined>;

  private initialized: boolean = false;

  public currentLetter: string | undefined = "";

  constructor(
    public readonly substitution: SubstitutionService,
    private readonly appState: AppStateService,
    @Inject(MAT_DIALOG_DATA) params: LetterSelectorData,
  ) {
    super(appState);
    this.letter = params.letter;
    const onlyLetters = this.substitution.getCurrent().alphabet.letters;
    const letters: (string | undefined)[] = onlyLetters.slice(0);
    letters.push(undefined);
    this.letters = letters;
    this.subs.push(substitution.getObservable(this.letter).subscribe((l) => (this.currentLetter = l)));

    this.used = new Map<string, BehaviorSubject<boolean>>();
    onlyLetters.forEach((letter) => this.used.set(letter, new BehaviorSubject<boolean>(false)));

    this.current = new Map<string, string>();
    const otherLetters = onlyLetters.slice(0);
    otherLetters.splice(otherLetters.indexOf(this.letter), 1);
    otherLetters.forEach((letter) =>
      this.subs.push(
        substitution.getObservable(letter).subscribe((value) => {
          this.current.set(letter, value);
          this.updateUsed();
        }),
      ),
    );
    this.initialized = true;
    this.updateUsed();
  }

  private updateUsed() {
    if (!this.initialized) {
      return;
    }
    const used = new Set<string | undefined>();
    this.current.forEach((v) => used.add(v));
    this.used.forEach((subject, letter) => subject.next(used.has(letter)));
  }

  public ngOnDestroy(): void {
    this.subs.forEach((sub) => sub.unsubscribe());
  }

  public selectLetter(letter: string | undefined): void {
    this.appState.informUIActivity();
    this.substitution.getCurrent().lettersMap.get(this.letter)?.next(letter);
  }

  public isInUse(letter: string | undefined): Observable<boolean> {
    const subject = this.used.get(letter || "");
    if (!subject) {
      return of(false);
    }
    return subject.asObservable();
  }
}
