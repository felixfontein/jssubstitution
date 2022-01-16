import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { AppStateService } from '../../services/app-state.service';
import { BaseActivityReporterComponent } from '../base-activity-reporter.component';
import { LicenseViewerComponent } from '../license-viewer/license-viewer.component';

import { MAIN_HELP } from '../../help';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends BaseActivityReporterComponent {
  public readonly mainHelp = MAIN_HELP;


  public constructor(public readonly appState: AppStateService,
                     private readonly matDialogService: MatDialog) {
    super(appState);
    this.mainHelp.showLicenses = () => {
      this.appState.informUIActivity();
      const config: MatDialogConfig = {
        role: 'dialog',
        restoreFocus: true,
      };
      this.matDialogService.open(LicenseViewerComponent, config);
    };
  }
}
