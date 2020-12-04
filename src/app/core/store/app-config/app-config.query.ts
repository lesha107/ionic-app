import { Injectable } from "@angular/core";
import { Query } from "@datorama/akita";
import { AppConfigStateInterface } from "src/app/core/interfaces/store";
import { AppConfigStore } from "src/app/core/store/app-config/app-config.store";

@Injectable({ providedIn: "root" })
export class AppConfigQuery extends Query<AppConfigStateInterface> {
  public readonly isLeftSidenavOpened$ = this.select(state => !!state.isLeftSidenavOpened);
  public readonly isRightSidenavOpened$ = this.select(state => !!state.isRightSidenavOpened);

  constructor(protected store: AppConfigStore) {
    super(store);
  }
}
