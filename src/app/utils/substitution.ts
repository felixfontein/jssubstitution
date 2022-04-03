
import { BehaviorSubject, Observable } from 'rxjs';

import { Alphabet, EMPTY_ALPHABET } from './alphabet';


export class Substitution {
  public readonly alphabet: Alphabet;

  public readonly letters: ReadonlyArray<BehaviorSubject<string | undefined>>;
  public readonly lettersMap: ReadonlyMap<string, BehaviorSubject<string | undefined>>;

  public readonly letterObservables: ReadonlyArray<Observable<string | undefined>>;
  public readonly letterObservablesMap: ReadonlyMap<string, Observable<string | undefined>>;

  public constructor(alphabet: Alphabet) {
    this.alphabet = alphabet;
    this.letters = alphabet.letters.map(_ => new BehaviorSubject<string | undefined>(undefined));
    this.letterObservables = this.letters.map(subject => subject.asObservable());
    const lettersMap = new Map<string, BehaviorSubject<string | undefined>>();
    const letterObservablesMap = new Map<string, Observable<string | undefined>>();
    this.alphabet.letters.forEach((letter, index) => {
      lettersMap.set(letter, this.letters[index]);
      letterObservablesMap.set(letter, this.letterObservables[index]);
    });
    this.lettersMap = lettersMap;
    this.letterObservablesMap = letterObservablesMap;
  }

  public isAnythingDefined(): boolean {
    for (const letter of this.letters) {
      if (letter.getValue() !== undefined) {
        return true;
      }
    }
    return false;
  }
}


export const EMPTY_SUBSTITUTION = new Substitution(EMPTY_ALPHABET);
