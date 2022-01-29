import { Injectable, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { TranslocoService } from '@ngneat/transloco';

import { Substitution } from '../utils/substitution';
import { SubstitutionService } from './substitution.service';
import { Alphabet } from '../utils/alphabet';
import { Cipher, CIPHERS } from '../ciphers';


// Reset UI in 5 minutes of no activity
const KIOSK_TIMEOUT = 5 * 60 * 1000;


export enum AppMode {
  STEP_1_CODING = 'coding',
  STEP_2_CAESAR = 'caesar',
  STEP_3_ROT13 = 'rot13',
  STEP_4_SUBSTITUTION = 'substitution',
  STEP_5_VIGENERE = 'vigenere',
}


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
export class AppStateService implements OnDestroy {
  public appMode: AppMode;

  public text: string;

  public kioskMode: boolean;

  public showHeader: boolean;
  public showKiosk: boolean;

  private currentCipher: Cipher;

  private kioskTimeout: undefined | number;

  constructor(private readonly subsService: SubstitutionService,
              private readonly translation: TranslocoService,
              private readonly matDialog: MatDialog) {
    // Configure app
    const params = new URLSearchParams(window.location.search);
    this.showHeader = params.get('header') !== 'off';
    this.kioskMode = params.get('kiosk') === 'on';
    this.showKiosk = this.kioskMode;
    if (this.kioskMode) {
      this.addKioskTimeout();
      if (params.get('header') == undefined) {
        this.showHeader = false;
      }
    }
    this.appMode = AppMode.STEP_4_SUBSTITUTION;
    switch (params.get('mode') || '') {
      case 'coding':
        this.appMode = AppMode.STEP_1_CODING;
        break;
      case 'caesar':
        this.appMode = AppMode.STEP_2_CAESAR;
        break;
      case 'rot13':
        this.appMode = AppMode.STEP_3_ROT13;
        break;
      case 'vigenere':
        this.appMode = AppMode.STEP_5_VIGENERE;
        break;
    }

    // Set up text and alphabet
    this.text = '';
    this.currentCipher = selectCipher(this.translation.getActiveLang());

    this.resetText();
  }

  public ngOnDestroy(): void {
    this.removeKioskTimeout();
  }

  private setCipher(cipher: Cipher) {
    const alphabet = new Alphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZ', ' .,;:-"');
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

  private resetKioskUI(): void {
    this.matDialog.openDialogs.slice().forEach(dialog => dialog.close());
    this.showKiosk = true;
    this.addKioskTimeout();
  }

  public informUIActivity(): void {
    this.addKioskTimeout();
  }

  private removeKioskTimeout() {
    if (this.kioskTimeout !== undefined) {
      window.clearTimeout(this.kioskTimeout);
      this.kioskTimeout = undefined;
    }
  }

  private addKioskTimeout(): void {
    if (this.kioskMode) {
      if (this.kioskTimeout !== undefined) {
        this.removeKioskTimeout();
      }
      this.kioskTimeout = window.setTimeout(this.resetKioskUI.bind(this), KIOSK_TIMEOUT);
    }
  }
}
