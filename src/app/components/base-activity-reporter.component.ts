import { Component, HostListener } from '@angular/core';

import { AppStateService } from '../services/app-state.service';


@Component({
  selector: 'app-base-activity-reporter',
  template: '',
})
export abstract class BaseActivityReporterComponent {
  protected constructor(private readonly _appState: AppStateService) {}

  @HostListener('mousemove')
  @HostListener('mousedown')
  @HostListener('mouseup')
  @HostListener('keydown')
  @HostListener('keyup')
  @HostListener('touchmove')
  @HostListener('touchstart')
  @HostListener('touchend')
  @HostListener('pointermove')
  @HostListener('pointerstart')
  @HostListener('pointerend')
  onMouseMove(): void {
    this._appState.informUIActivity();
  }
}
