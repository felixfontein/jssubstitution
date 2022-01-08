import { Component, OnInit } from '@angular/core';

import { TranslocoService } from '@ngneat/transloco';

import { CIPHERS } from '../../ciphers';
import { AppStateService } from '../../services/app-state.service';
import { LANGUAGES } from '../../transloco-root.module';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public readonly languages = LANGUAGES;
  public readonly ciphers = CIPHERS;


  constructor(private readonly translate: TranslocoService,
              public readonly appState: AppStateService) { }

  public selectLanguage(language: string) {
    this.translate.setActiveLang(language);
  }
}
