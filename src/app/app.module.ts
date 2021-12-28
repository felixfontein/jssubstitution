import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { TranslocoRootModule } from './transloco-root.module';

import { DisplayLetterPipe } from './pipes/display-letter.pipe';

import { SubstitutionService } from './services/substitution.service';

import { AppComponent } from './components/app/app.component';
import { HeaderComponent } from './components/header/header.component';
import { LetterSelectorComponent } from './components/letter-selector/letter-selector.component';
import { SubstitutionComponent } from './components/substitution/substitution.component';
import { SubstitutionLetterComponent } from './components/substitution-letter/substitution-letter.component';
import { SubstitutionStatsComponent } from './components/substitution-stats/substitution-stats.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayLetterPipe,
    HeaderComponent,
    LetterSelectorComponent,
    SubstitutionComponent,
    SubstitutionLetterComponent,
    SubstitutionStatsComponent,
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    MatMenuModule,
    NoopAnimationsModule,
    HttpClientModule,
    TranslocoRootModule,
  ],
  providers: [
    SubstitutionService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
