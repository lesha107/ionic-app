import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { enableAkitaProdMode, persistState } from "@datorama/akita";
import { debounceTime } from "rxjs/operators";
import { AppBrowserModule } from "src/app/app-browser.module";

import { environment } from "./environments/environment";
import { hmrBootstrap } from "./hmr";

function bootstrap() {
  const storage = persistState({
    preStorageUpdateOperator: () => debounceTime(2000)
  });
  const providers = [{ provide: "persistStorage", useValue: storage }];

  return platformBrowserDynamic(providers).bootstrapModule(AppBrowserModule);
}

function runInHmr() {
  if (!module["hot"]) {
    console.error("HMR is not enabled for webpack-dev-server!");
    console.log("Are you using the --hmr flag for ng serve?");
    return;
  }
  hmrBootstrap(module, bootstrap);
}

function runDefault() {
  document.addEventListener("DOMContentLoaded", () => {
    bootstrap().catch(err => console.log(err));
  });
}

function main() {
  const { production, hmr } = environment;

  if (production) {
    enableProdMode();
    enableAkitaProdMode();
  }

  hmr ? runInHmr() : runDefault();
}

main();
