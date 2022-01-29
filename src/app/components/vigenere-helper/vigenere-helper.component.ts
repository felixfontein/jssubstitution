import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';


const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


@Component({
  selector: 'app-vigenere-helper',
  templateUrl: './vigenere-helper.component.html',
  styleUrls: ['./vigenere-helper.component.scss']
})
export class VigenereHelperComponent implements OnChanges {
  @Input()
  public length: number = 0;

  @Input()
  public operation: '+' | '-' = '+';

  public textInput: string = '';
  public keyInput: string = '';

  public source: (string | undefined)[];
  public key: (string | undefined)[];
  public destination: (string | undefined)[];

  constructor() {
    this.source = [];
    this.key = [];
    this.destination = [];
  }

  public ngOnChanges(changes: SimpleChanges): void {
    this.source.length = this.length;
    this.key.length = this.length;
    this.destination.length = this.length;
    if (this.textInput.length > this.length) {
      this.textInput = this.textInput.substring(0, this.length);
    }
    if (this.keyInput.length > this.length) {
      this.keyInput = this.keyInput.substring(0, this.length);
    }
    this.inputChanged();
  }

  public inputChanged(): void {
    for (let index = 0; index < this.length; ++index) {
      const sourceIdx = ALPHABET.indexOf(this.textInput[index]?.toUpperCase() || ' ');
      const keyIdx = ALPHABET.indexOf(this.keyInput[index]?.toUpperCase() || ' ');
      this.source[index] = ALPHABET[sourceIdx];
      this.key[index] = ALPHABET[keyIdx];
      let resultIndex = -1;
      if (sourceIdx >= 0 && keyIdx >= 0) {
        if (this.operation === '+') {
          resultIndex = (sourceIdx + keyIdx) % ALPHABET.length;
        } else {
          resultIndex = (ALPHABET.length + sourceIdx - keyIdx) % ALPHABET.length;
        }
      }
      this.destination[index] = ALPHABET[resultIndex];
    }
  }

}
