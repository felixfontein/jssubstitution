import { HttpClient } from '@angular/common/http';
import {
  getBrowserLang,
  TRANSLOCO_LOADER,
  Translation,
  TranslocoLoader,
  TRANSLOCO_CONFIG,
  translocoConfig,
  TranslocoModule,
} from '@ngneat/transloco';
import { Injectable, NgModule } from '@angular/core';

import { environment } from '../environments/environment';

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
  constructor(private http: HttpClient) {}

  getTranslation(lang: string) {
    return this.http.get<Translation>(`./assets/i18n/${lang}.json`);
  }
}


const AVAILABLE_LANGS = ['en', 'de'];


function pickDefaultLanguage(): string {
  const language = getBrowserLang();
  if (language && AVAILABLE_LANGS.indexOf(language) >= 0) {
    return language;
  }
  return 'en';
}


@NgModule({
  exports: [ TranslocoModule ],
  providers: [
    {
      provide: TRANSLOCO_CONFIG,
      useValue: translocoConfig({
        availableLangs: AVAILABLE_LANGS,
        defaultLang: pickDefaultLanguage(),
        fallbackLang: 'en',
        reRenderOnLangChange: true,
        prodMode: environment.production,
      })
    },
    { provide: TRANSLOCO_LOADER, useClass: TranslocoHttpLoader }
  ]
})
export class TranslocoRootModule {}
