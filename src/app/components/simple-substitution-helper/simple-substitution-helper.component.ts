import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';


export type SimpleSubstitution = [string, string][];

@Component({
  selector: 'app-simple-substitution-helper',
  templateUrl: './simple-substitution-helper.component.html',
  styleUrls: ['./simple-substitution-helper.component.scss']
})
export class SimpleSubstitutionHelperComponent implements OnChanges {
  @Input()
  public length = 0;

  @Input()
  public substitution: SimpleSubstitution = [];

  public source: (string | undefined)[];
  public destination: (string | undefined)[];
  public index: number;

  constructor() {
    this.source = [];
    this.destination = [];
    this.index = 0;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.source.length = this.length;
    this.destination.length = this.length;
    this.index = Math.min(this.index, this.length);
    const subs = new Map<string, string>();
    this.substitution.forEach(([s, d]) => subs.set(s, d));
    this.source.forEach((v, i) => this.destination[i] = subs.get(v ?? ''));
  }

  add([src, dst]: [string, string]): void {
    if (this.index === this.source.length) {
      return;
    }
    this.source[this.index] = src;
    this.destination[this.index] = dst;
    this.index += 1;
  }

  removeLast(): void {
    if (this.index === 0) {
      return;
    }
    this.index -= 1;
    this.source[this.index] = undefined;
    this.destination[this.index] = undefined;
  }

}
