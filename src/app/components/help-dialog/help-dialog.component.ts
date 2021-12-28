import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


export type TranslationKey = string;

export interface HelpPage {
  paragraphs: TranslationKey[];
}

export interface HelpData {
  title: TranslationKey;
  pages: HelpPage[];
}


@Component({
  selector: 'app-help-dialog',
  templateUrl: './help-dialog.component.html',
  styleUrls: ['./help-dialog.component.scss']
})
export class HelpDialogComponent {
  public page: number;

  public get hasPrevPage(): boolean {
    return this.page > 0;
  }

  public get hasNextPage(): boolean {
    return this.page + 1 < this.params.pages.length;
  }

  constructor(@Inject(MAT_DIALOG_DATA) public readonly params: HelpData) {
    this.page = 0;
  }

  public prevPage(): void {
    if (this.page > 0) {
      this.page -= 1;
    }
  }

  public nextPage(): void {
    if (this.page + 1 < this.params.pages.length) {
      this.page += 1;
    }
  }
}
