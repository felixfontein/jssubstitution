import { Component, OnInit } from '@angular/core';

import { TranslocoService } from '@ngneat/transloco';

import { LANGUAGES } from '../../transloco-root.module';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public readonly languages = LANGUAGES;


  constructor(private readonly translate: TranslocoService) { }

  public selectLanguage(language: string) {
    this.translate.setActiveLang(language);
  }
}
