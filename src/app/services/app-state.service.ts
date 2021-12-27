import { Injectable } from '@angular/core';

import { Substitution } from '../utils/substitution';
import { SubstitutionService } from './substitution.service';
import { Alphabet } from '../utils/alphabet';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  public text: string;

  constructor(private readonly subsService: SubstitutionService) {
    const alphabet = new Alphabet(' AÄBCDEFGHIJKLMNOÖPQRSTUÜVWXYZ');
    this.text = 'Hello world';
    this.subsService.setSubstitution(new Substitution(alphabet));
  }
}
