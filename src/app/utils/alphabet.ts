
function createSet(letters: ReadonlyArray<string>): Set<string> {
  const letterSet = new Set<string>();
  for (const letter of letters) {
    letterSet.add(letter);
  }
  return letterSet;
}

export class Alphabet {
  public readonly letters: ReadonlyArray<string>;
  public readonly letterSet: ReadonlySet<string>;

  public readonly others: ReadonlyArray<string>;
  public readonly otherSet: ReadonlySet<string>;

  public constructor(letters: string | string[], others?: string | string[]) {
    if (!(letters instanceof Array)) {
      letters = Array.from(letters);
    }
    this.letters = letters.slice(0);
    this.letterSet = createSet(this.letters);

    others = others ?? []
    if (!(others instanceof Array)) {
      others = Array.from(others);
    }
    this.others = others.slice(0);
    this.otherSet = createSet(this.others);
  }

  public splitAndNormalize(input: string, acceptOther = false): string[] {
    const result = [];
    for (const letter of Array.from(input)) {
      const normalized = this.normalize(letter, acceptOther);
      if (normalized.length > 0) {
        result.push(normalized);
      }
    }
    return result;
  }

  public normalize(input: string, acceptOther = false): string {
    if (this.letterSet.has(input)) {
      return input;
    }
    if (acceptOther && this.otherSet.has(input)) {
      return input;
    }
    const upper = input.toUpperCase();
    if (this.letterSet.has(upper)) {
      return upper;
    }
    if (acceptOther && this.otherSet.has(upper)) {
      return upper;
    }
    const lower = input.toLowerCase();
    if (this.letterSet.has(lower)) {
      return lower;
    }
    if (acceptOther && this.otherSet.has(lower)) {
      return lower;
    }
    return '';
  }
}


export const EMPTY_ALPHABET = new Alphabet([]);
