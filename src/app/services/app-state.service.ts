import { Injectable } from '@angular/core';

import { TranslocoService } from '@ngneat/transloco';

import { Substitution } from '../utils/substitution';
import { SubstitutionService } from './substitution.service';
import { Alphabet } from '../utils/alphabet';
import { Cipher, CIPHERS } from '../ciphers';


function selectCipher(language: string | undefined): Cipher {
  for (const cipher of CIPHERS) {
    if (cipher.textLocale === language) {
      return cipher;
    }
  }
  return CIPHERS[0];
}


@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  public text: string;

  public showHeader: boolean;

  private currentCipher: Cipher;

  constructor(private readonly subsService: SubstitutionService,
              private readonly translation: TranslocoService) {
    // Configure app
    const params = new URLSearchParams(window.location.search);
    this.showHeader = params.get('header') !== 'off';

    // Set up text and alphabet
    this.text = '';
    this.currentCipher = selectCipher(this.translation.getActiveLang());

    this.resetText();
  }

  private setCipher(cipher: Cipher) {
    const alphabet = new Alphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZ', ' .,;:-');
    this.text = cipher.text;
    this.subsService.setSubstitution(new Substitution(alphabet));
  }

  public resetText(): void {
    this.setCipher(this.currentCipher);
  }

  public selectCipher(cipher: Cipher) {
    this.currentCipher = cipher;
    this.resetText();
  }

  public get activeCipher(): Cipher {
    return this.currentCipher;
  }
}
