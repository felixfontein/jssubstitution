import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import { SubstitutionService } from '../../services/substitution.service';


class LetterCount {
  public readonly frequency: number;

  constructor(public readonly letter: string, count: number, total: number) {
    this.frequency = count / Math.max(1, total);
  }
}


@Component({
  selector: 'app-substitution-stats',
  templateUrl: './substitution-stats.component.html',
  styleUrls: ['./substitution-stats.component.scss']
})
export class SubstitutionStatsComponent implements OnChanges {
  @Input()
  public letters: string[] = [];

  private readonly frequencies$: BehaviorSubject<LetterCount[]>;
  public readonly frequencies: Observable<LetterCount[]>;

  public maxFrequency: number = 1;

  constructor(public readonly substitution: SubstitutionService) {
    this.frequencies$ = new BehaviorSubject<LetterCount[]>([]);
    this.frequencies = this.frequencies$.asObservable();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const count = new Map<string, number>();
    this.letters.forEach(letter => count.set(letter, (count.get(letter) || 0) + 1));
    const frequencies: LetterCount[] = [];
    count.forEach((letterCount, letter) => {
      frequencies.push(new LetterCount(letter, letterCount, this.letters.length));
    });
    const maxFrequency = frequencies.map(f => f.frequency).reduce((a, b) => Math.max(a, b), 0);
    this.maxFrequency = maxFrequency === 0 ? 1 : maxFrequency;
    frequencies.sort((a, b) => b.frequency - a.frequency);
    this.frequencies$.next(frequencies);
  }

}
