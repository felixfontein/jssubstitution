import { Component } from '@angular/core';

import { AppStateService } from '../../app/services/app-state.service';
import { SubstitutionService } from '../../app/services/substitution.service';


@Component({
  selector: 'app-view-text-dialog',
  templateUrl: './view-text-dialog.component.html',
  styleUrls: ['./view-text-dialog.component.scss']
})
export class ViewTextDialogComponent {
  public readonly letters: (string | undefined)[];

  constructor(appState: AppStateService,
              substitution: SubstitutionService) {
    this.letters = [];
    const subs = substitution.getCurrent();
    for (const letter of subs.alphabet.splitAndNormalize(appState.text, true)) {
      if (subs.alphabet.letterSet.has(letter)) {
        this.letters.push(subs.lettersMap.get(letter)?.getValue());
      } else {
        this.letters.push(letter);
      }
    }
  }
}
