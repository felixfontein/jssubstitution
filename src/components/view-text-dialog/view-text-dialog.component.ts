import { Component } from '@angular/core';

import { AppStateService } from '../../app/services/app-state.service';
import { SubstitutionService } from '../../app/services/substitution.service';


@Component({
  selector: 'app-view-text-dialog',
  templateUrl: './view-text-dialog.component.html',
  styleUrls: ['./view-text-dialog.component.scss']
})
export class ViewTextDialogComponent {
  public readonly letters: [string | undefined, boolean][];

  constructor(appState: AppStateService,
              substitution: SubstitutionService) {
    this.letters = [];
    const subs = substitution.getCurrent();
    let isQuoted = false;
    for (const letter of subs.alphabet.splitAndNormalize(appState.text, true)) {
      if (subs.alphabet.letterSet.has(letter)) {
        this.letters.push([subs.lettersMap.get(letter)?.getValue(), isQuoted]);
      } else {
        this.letters.push([letter, isQuoted || letter === '"']);
        if (letter === '"') {
          isQuoted = !isQuoted;
        }
      }
    }
  }
}
