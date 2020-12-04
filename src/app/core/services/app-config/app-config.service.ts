import { Injectable } from "@angular/core";
import { AppConfigStateInterface } from "src/app/core/interfaces/store";
import { AppConfigStore } from "src/app/core/store/app-config";

@Injectable({ providedIn: "root" })
export class AppConfigService {
  constructor(private readonly _appConfigStore: AppConfigStore) {}

  private get state() {
    return this._appConfigStore.getValue();
  }

  public toggleSidenav(key: keyof AppConfigStateInterface): void {
    this._appConfigStore.update({
      [key]: !this.state[key]
    });
  }
}
