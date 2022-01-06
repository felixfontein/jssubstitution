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
import { HelpButtonComponent } from './components/help-button/help-button.component';
import { HelpDialogComponent } from './components/help-dialog/help-dialog.component';
import { LetterSelectorComponent } from './components/letter-selector/letter-selector.component';
import { SubstitutionComponent } from './components/substitution/substitution.component';
import { SubstitutionLetterComponent } from './components/substitution-letter/substitution-letter.component';
import { SubstitutionStatsComponent } from './components/substitution-stats/substitution-stats.component';
import { LicenseViewerComponent } from './components/license-viewer/license-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayLetterPipe,
    HeaderComponent,
    HelpButtonComponent,
    HelpDialogComponent,
    LetterSelectorComponent,
    SubstitutionComponent,
    SubstitutionLetterComponent,
    SubstitutionStatsComponent,
    LicenseViewerComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
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
