import { Injectable } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import {
  AppDialogServiceOpenArgsInterface,
  AppDialogServiceOpenResponseInterface
} from "src/app/core/interfaces/services";

@Injectable({
  providedIn: "root"
})
export class AppDialogService {
  private readonly fullSizeConfig: MatDialogConfig;

  constructor(private readonly _matDialog: MatDialog) {
    this.fullSizeConfig = this.getFullSizeConfig();
  }

  public open(args: AppDialogServiceOpenArgsInterface): AppDialogServiceOpenResponseInterface {
    const { data, component, fullSize, config } = args;

    const dialogConfig = {
      ...(fullSize ? this.fullSizeConfig : {}),
      ...config,
      data
    };

    return this._matDialog.open(component, dialogConfig).afterClosed();
  }

  private getFullSizeConfig(): MatDialogConfig {
    return {
      height: "100vh",
      width: "100vw",
      maxWidth: "none"
    };
  }
}
