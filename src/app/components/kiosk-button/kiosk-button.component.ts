import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { AppStateService } from '../../services/app-state.service';
import { SubstitutionService } from '../../services/substitution.service';

import { KioskConfirmDialogComponent } from '../../../components/kiosk-confirm-dialog/kiosk-confirm-dialog.component';


@Component({
  selector: 'app-kiosk-button',
  templateUrl: './kiosk-button.component.html',
  styleUrls: ['./kiosk-button.component.scss']
})
export class KioskButtonComponent {
  constructor(private readonly matDialogService: MatDialog,
              private readonly substitution: SubstitutionService,
              private readonly appState: AppStateService) { }

  public showKiosk(): void {
    if (!this.substitution.getCurrent().isAnythingDefined()) {
      this.appState.showKiosk = true;
      return;
    }
    // Show confirmation dialog
    const config: MatDialogConfig = {
      role: 'dialog',
      restoreFocus: true,
    };
    const ref = this.matDialogService.open(KioskConfirmDialogComponent, config);
    ref.afterClosed().subscribe(value => {
      if (value) {
        this.appState.showKiosk = true;
      }
    });
  }
}
