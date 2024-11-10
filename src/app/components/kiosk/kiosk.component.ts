import { Component } from "@angular/core";

import { AppStateService } from "../../services/app-state.service";

import { Cipher, CIPHERS } from "../../ciphers";
import { Language, LANGUAGES } from "../../transloco-root.module";
import { TranslocoService } from "@ngneat/transloco";

@Component({
  selector: "app-kiosk",
  templateUrl: "./kiosk.component.html",
  styleUrls: ["./kiosk.component.scss"],
})
export class KioskComponent {
  public readonly ciphers = CIPHERS;

  constructor(
    private readonly appState: AppStateService,
    private readonly translate: TranslocoService,
  ) {}

  public getLanguage(locale: string): Language {
    for (const lang of LANGUAGES) {
      if (lang.name === locale || lang.locale === locale) {
        return lang;
      }
    }
    throw Error(`Cannot find language for "${locale}"`);
  }

  public selectCipher(cipher: Cipher): void {
    this.appState.informUIActivity();
    this.appState.selectCipher(cipher);
    this.translate.setActiveLang(this.getLanguage(cipher.textLocale).name);
    this.appState.showKiosk = false;
  }
}
