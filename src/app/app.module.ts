import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { DisplayLetterPipe } from './pipes/display-letter.pipe';

import { SubstitutionService } from './services/substitution.service';

import { AppComponent } from './components/app/app.component';
import { SubstitutionComponent } from './components/substitution/substitution.component';
import { SubstitutionLetterComponent } from './components/substitution-letter/substitution-letter.component';
import { SubstitutionStatsComponent } from './components/substitution-stats/substitution-stats.component';
import { LetterSelectorComponent } from './components/letter-selector/letter-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayLetterPipe,
    SubstitutionComponent,
    SubstitutionLetterComponent,
    SubstitutionStatsComponent,
    LetterSelectorComponent,
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    NoopAnimationsModule,
  ],
  providers: [
    SubstitutionService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
