import { Injectable, NgModule } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { getBrowserLang, provideTransloco, Translation, TranslocoLoader, TranslocoModule } from "@ngneat/transloco";
import { Locale, TranslocoLocaleModule, provideTranslocoLocale } from "@ngneat/transloco-locale";

import { environment } from "../environments/environment";

@Injectable({ providedIn: "root" })
export class TranslocoHttpLoader implements TranslocoLoader {
  constructor(private http: HttpClient) {}

  getTranslation(lang: string) {
    return this.http.get<Translation>(`./assets/i18n/${lang}.json`);
  }
}

export interface Language {
  readonly name: string;
  readonly fullName: string;
  readonly locale: Locale;
}

export const LANGUAGES: Language[] = [
  {
    name: "en",
    fullName: "English",
    locale: "en-US",
  },
  {
    name: "de",
    fullName: "Deutsch",
    locale: "de-DE",
  },
];

const AVAILABLE_LANGS = LANGUAGES.map((l) => l.name);

function getLangLocaleMapping(): { [label: string]: string } {
  const result: { [label: string]: string } = {};
  LANGUAGES.forEach((l) => (result[l.name] = l.locale));
  return result;
}

function isValidLanguage(language: string | null | undefined): language is string {
  return !!language && AVAILABLE_LANGS.indexOf(language) >= 0;
}

function pickDefaultLanguage(): string {
  try {
    const params = new URLSearchParams(window.location.search);
    const language = params.get("lang");
    if (isValidLanguage(language)) {
      return language;
    }
  } catch (e) {
    // ignore
  }

  const language = getBrowserLang();
  if (isValidLanguage(language)) {
    return language;
  }

  return "en";
}

@NgModule({
  exports: [TranslocoModule, TranslocoLocaleModule],
  providers: [
    provideTransloco({
      config: {
        availableLangs: AVAILABLE_LANGS,
        defaultLang: pickDefaultLanguage(),
        fallbackLang: "en",
        reRenderOnLangChange: true,
        prodMode: environment.production,
      },
      loader: TranslocoHttpLoader,
    }),
    provideTranslocoLocale({
      langToLocaleMapping: getLangLocaleMapping(),
    }),
  ],
})
export class TranslocoRootModule {}
