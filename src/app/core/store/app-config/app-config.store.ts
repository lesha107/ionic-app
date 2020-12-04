import { Injectable } from "@angular/core";
import { Store, StoreConfig } from "@datorama/akita";
import { AppConfigStateInterface } from "src/app/core/interfaces/store";
import { createInitialState } from "src/app/core/store/app-config/app-config.state";

@Injectable({ providedIn: "root" })
@StoreConfig({ name: "config" })
export class AppConfigStore extends Store<AppConfigStateInterface> {
  constructor() {
    super(createInitialState());
  }
}
