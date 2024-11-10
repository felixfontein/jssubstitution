import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MatDialogModule } from "@angular/material/dialog";
import { MatMenuModule } from "@angular/material/menu";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { TranslocoRootModule } from "./transloco-root.module";

import { DisplayLetterPipe } from "./pipes/display-letter.pipe";

import { SubstitutionService } from "./services/substitution.service";

import { AppComponent } from "./components/app/app.component";
import { HeaderComponent } from "./components/header/header.component";
import { HelpButtonComponent } from "./components/help-button/help-button.component";
import { HelpDialogComponent } from "./components/help-dialog/help-dialog.component";
import { KioskComponent } from "./components/kiosk/kiosk.component";
import { KioskButtonComponent } from "./components/kiosk-button/kiosk-button.component";
import { KioskConfirmDialogComponent } from "../components/kiosk-confirm-dialog/kiosk-confirm-dialog.component";
import { LetterSelectorComponent } from "./components/letter-selector/letter-selector.component";
import { LicenseViewerComponent } from "./components/license-viewer/license-viewer.component";
import { SimpleSubstitutionHelperComponent } from "./components/simple-substitution-helper/simple-substitution-helper.component";
import { SubstitutionComponent } from "./components/substitution/substitution.component";
import { SubstitutionLetterComponent } from "./components/substitution-letter/substitution-letter.component";
import { SubstitutionStatsComponent } from "./components/substitution-stats/substitution-stats.component";
import { ViewTextButtonComponent } from "../components/view-text-button/view-text-button.component";
import { ViewTextDialogComponent } from "../components/view-text-dialog/view-text-dialog.component";
import { VigenereHelperComponent } from "./components/vigenere-helper/vigenere-helper.component";

@NgModule({
  declarations: [
    AppComponent,
    DisplayLetterPipe,
    HeaderComponent,
    HelpButtonComponent,
    HelpDialogComponent,
    KioskComponent,
    KioskButtonComponent,
    KioskConfirmDialogComponent,
    LetterSelectorComponent,
    LicenseViewerComponent,
    SimpleSubstitutionHelperComponent,
    SubstitutionComponent,
    SubstitutionLetterComponent,
    SubstitutionStatsComponent,
    ViewTextButtonComponent,
    ViewTextDialogComponent,
    VigenereHelperComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    MatMenuModule,
    NoopAnimationsModule,
    HttpClientModule,
    TranslocoRootModule,
  ],
  providers: [SubstitutionService],
  bootstrap: [AppComponent],
})
export class AppModule {}
