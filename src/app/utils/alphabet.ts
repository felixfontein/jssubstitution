
export class Alphabet {
  public readonly letters: ReadonlyArray<string>;
  public readonly letterSet: ReadonlySet<string>;

  public constructor(letters: string | string[]) {
    if (!(letters instanceof Array)) {
      letters = Array.from(letters);
    }
    this.letters = letters.slice(0);
    const letterSet = new Set<string>();
    for (const letter of letters) {
      letterSet.add(letter);
    }
    this.letterSet = letterSet;
  }

  public splitAndNormalize(input: string): string[] {
    const result = [];
    for (const letter of Array.from(input)) {
      const normalized = this.normalize(letter);
      if (normalized.length > 0) {
        result.push(normalized);
      }
    }
    return result;
  }

  public normalize(input: string): string {
    if (this.letterSet.has(input)) {
      return input;
    }
    const upper = input.toUpperCase();
    if (this.letterSet.has(upper)) {
      return upper;
    }
    const lower = input.toLowerCase();
    if (this.letterSet.has(lower)) {
      return lower;
    }
    return '';
  }
}


export const EMPTY_ALPHABET = new Alphabet([]);
