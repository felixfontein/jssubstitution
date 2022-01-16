import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseActivityReporterComponent } from '../base-activity-reporter.component';
import { AppStateService } from '../../services/app-state.service';


interface License {
  name: string;
  repository?: string;
  version?: string;
  author?: string;
  licenseName?: string;
  licenseText?: string;
  licenseURL?: string;
}


@Component({
  selector: 'app-license-viewer',
  templateUrl: './license-viewer.component.html',
  styleUrls: ['./license-viewer.component.scss']
})
export class LicenseViewerComponent extends BaseActivityReporterComponent {
  public loading = true;
  public readonly licenses: License[];

  constructor(private readonly httpClient: HttpClient, appState: AppStateService) {
    super(appState);
    const thisLicense: License = {
      name: 'Substitution Cipher Application',
      repository: 'https://github.com/felixfontein/jssubstitution/',
      author: 'Felix Fontein',
      licenseName: 'GNU General Public License v3.0 or later',
      licenseURL: 'https://spdx.org/licenses/GPL-3.0-or-later.html',
    };
    this.licenses = [thisLicense];
    this.httpClient.get('licenses.json').subscribe(result => {
      if (Array.isArray(result)) {
        this.licenses.push(...result);
      }
      this.loading = false;
    });
    this.httpClient.get('LICENSE.txt', { responseType: 'text'}).subscribe(result => {
      thisLicense.licenseText = result;
      this.loading = false;
    });
  }
}
