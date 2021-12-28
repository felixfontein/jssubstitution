import { Component } from '@angular/core';

import { AppStateService } from '../../services/app-state.service';

import { MAIN_HELP } from '../../help';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public readonly mainHelp = MAIN_HELP;


  public constructor(public readonly appState: AppStateService) {
  }
}
