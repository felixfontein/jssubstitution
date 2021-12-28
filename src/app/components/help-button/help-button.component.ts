import { Component, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { HelpData, HelpDialogComponent } from '../help-dialog/help-dialog.component';


@Component({
  selector: 'app-help-button',
  templateUrl: './help-button.component.html',
  styleUrls: ['./help-button.component.scss']
})
export class HelpButtonComponent {
  @Input()
  public data: HelpData | undefined;

  constructor(private readonly matDialogService: MatDialog) { }

  public showHelp(): void {
    if (this.data) {
      const config: MatDialogConfig = {
        role: 'dialog',
        restoreFocus: true,
      };
      config.data = this.data;
      this.matDialogService.open(HelpDialogComponent, config);
    }
  }
}
