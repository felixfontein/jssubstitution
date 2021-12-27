import { Component } from '@angular/core';
import { AppStateService } from '../../services/app-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public constructor(public readonly appState: AppStateService) {
  }
}
