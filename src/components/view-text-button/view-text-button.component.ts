import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { ViewTextDialogComponent } from '../view-text-dialog/view-text-dialog.component';


@Component({
  selector: 'app-view-text-button',
  templateUrl: './view-text-button.component.html',
  styleUrls: ['./view-text-button.component.scss']
})
export class ViewTextButtonComponent {
  constructor(private readonly matDialogService: MatDialog) { }

  showText(): void {
    const config: MatDialogConfig = {
      role: 'dialog',
      restoreFocus: true,
    };
    this.matDialogService.open(ViewTextDialogComponent, config);
  }
}
