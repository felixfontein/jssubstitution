import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

import { AppStateService } from "../../services/app-state.service";
import { BaseActivityReporterComponent } from "../base-activity-reporter.component";

export type TranslationKey = string;

export interface HelpPage {
  paragraphs: TranslationKey[];
}

export interface HelpData {
  title: TranslationKey;
  pages: HelpPage[];
  offerResetText?: boolean;
  showLicenses?: () => void;
}

@Component({
  selector: "app-help-dialog",
  templateUrl: "./help-dialog.component.html",
  styleUrls: ["./help-dialog.component.scss"],
})
export class HelpDialogComponent extends BaseActivityReporterComponent {
  public page: number;

  public get hasPrevPage(): boolean {
    return this.page > 0;
  }

  public get hasNextPage(): boolean {
    return this.page + 1 < this.params.pages.length;
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public readonly params: HelpData,
    private readonly appState: AppStateService,
  ) {
    super(appState);
    this.page = 0;
  }

  public prevPage(): void {
    this.appState.informUIActivity();
    if (this.page > 0) {
      this.page -= 1;
    }
  }

  public nextPage(): void {
    this.appState.informUIActivity();
    if (this.page + 1 < this.params.pages.length) {
      this.page += 1;
    }
  }

  public resetText(): void {
    this.appState.informUIActivity();
    this.appState.resetText();
  }
}
