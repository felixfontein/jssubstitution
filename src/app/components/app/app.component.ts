import { AfterContentInit, Component, ElementRef, HostListener, ViewChild } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";

import { AppMode, AppStateService } from "../../services/app-state.service";
import { BaseActivityReporterComponent } from "../base-activity-reporter.component";
import { LicenseViewerComponent } from "../license-viewer/license-viewer.component";
import { SubstitutionService } from "../../services/substitution.service";

import { CAESAR_HELP, CODING_HELP, MAIN_HELP, ROT13_HELP, VIGENERE_HELP } from "../../help";
import { CODING_SUBS, CAESAR_SUBS, ROT13_SUBS } from "../../simple-substitutions";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent extends BaseActivityReporterComponent implements AfterContentInit {
  public readonly codingHelp = CODING_HELP;
  public readonly caesarHelp = CAESAR_HELP;
  public readonly rot13Help = ROT13_HELP;
  public readonly mainHelp = MAIN_HELP;
  public readonly vigenereHelp = VIGENERE_HELP;

  public readonly codingSubs = CODING_SUBS;
  public readonly caesarSubs = CAESAR_SUBS;
  public readonly rot13Subs = ROT13_SUBS;

  public readonly AppMode = AppMode;

  @ViewChild("mainViewA", { read: ElementRef, static: false })
  mainViewA?: ElementRef;
  @ViewChild("mainViewB", { read: ElementRef, static: false })
  mainViewB?: ElementRef;
  @ViewChild("mainViewC", { read: ElementRef, static: false })
  mainViewC?: ElementRef;
  @ViewChild("mainViewD", { read: ElementRef, static: false })
  mainViewD?: ElementRef;
  @ViewChild("mainViewE", { read: ElementRef, static: false })
  mainViewE?: ElementRef;

  public constructor(
    public readonly appState: AppStateService,
    private readonly substitution: SubstitutionService,
    private readonly matDialogService: MatDialog,
  ) {
    super(appState);
    for (const help of [this.codingHelp, this.caesarHelp, this.rot13Help, this.mainHelp, this.vigenereHelp]) {
      help.showLicenses = () => {
        this.appState.informUIActivity();
        const config: MatDialogConfig = {
          role: "dialog",
          width: "50em",
          restoreFocus: true,
        };
        this.matDialogService.open(LicenseViewerComponent, config);
      };
    }
    this.substitution.substitution.subscribe(() => {
      // Make sure we measure the height *after* layouting
      window.setTimeout(() => this.reportSize(), 0);
    });
  }

  private reportSize(): void {
    // If this app is included in an <iframe>, inform the owner of its size
    if (!window.top) {
      return;
    }
    const message = {
      appMode: this.appState.appMode,
      height: document.body.scrollHeight,
      width: document.body.scrollWidth,
    };
    for (const mainView of [this.mainViewA, this.mainViewB, this.mainViewC, this.mainViewD, this.mainViewE]) {
      if (mainView?.nativeElement) {
        message.height = mainView.nativeElement.scrollHeight;
      }
    }
    window.top.postMessage(message, "*");
  }

  public ngAfterContentInit(): void {
    this.reportSize();
  }

  @HostListener("window:resize")
  private onResize(): void {
    this.reportSize();
  }
}
