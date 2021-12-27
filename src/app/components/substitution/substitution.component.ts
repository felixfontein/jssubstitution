import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

import { BehaviorSubject, Observable, Subscription } from 'rxjs';

import { SubstitutionService } from '../../services/substitution.service';

@Component({
  selector: 'app-substitution',
  templateUrl: './substitution.component.html',
  styleUrls: ['./substitution.component.scss']
})
export class SubstitutionComponent implements OnInit, OnDestroy, OnChanges {
  @Input()
  public text = '';

  private readonly unsub: Subscription[];

  private readonly text$: BehaviorSubject<string>;

  private readonly letters$: BehaviorSubject<string[]>;
  public readonly letters: Observable<string[]>;

  private subs: Subscription | undefined;

  constructor(public readonly substitution: SubstitutionService) {
    this.unsub = [];
    this.text$ = new BehaviorSubject<string>('');
    this.letters$ = new BehaviorSubject<string[]>([]);
    this.letters = this.letters$.asObservable();
    this.unsub.push(this.text$.subscribe(text => {
      if (this.subs) {
        this.subs.unsubscribe();
      }
      this.subs = substitution.getSplitObservable(text).subscribe(letters => this.letters$.next(letters));
    }));
  }

  public ngOnInit(): void {
    this.text$.next(this.text);
  }

  public ngOnDestroy(): void {
    if (this.subs) {
      this.subs.unsubscribe();
    }
    this.unsub.forEach(unsub => unsub.unsubscribe());
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (this.text !== this.text$.getValue()) {
      this.text$.next(this.text);
    }
  }
}
