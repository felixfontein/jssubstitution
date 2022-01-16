import { Component } from '@angular/core';

import { AppStateService } from '../../services/app-state.service';


@Component({
  selector: 'app-kiosk-button',
  templateUrl: './kiosk-button.component.html',
  styleUrls: ['./kiosk-button.component.scss']
})
export class KioskButtonComponent {
  constructor(private readonly appState: AppStateService) { }

  public showKiosk(): void {
    this.appState.showKiosk = true;
  }
}
