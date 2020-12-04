import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppCoreModule } from "src/app/core/app-core.module";
import { AppCoreComponent } from "src/app/core/container/app-core.component";

const APP_BROWSER_IMPORTS = [AppCoreModule, BrowserAnimationsModule];
const APP_BROWSER_BOOTSTRAP = [AppCoreComponent];

@NgModule({
  imports: APP_BROWSER_IMPORTS,
  bootstrap: APP_BROWSER_BOOTSTRAP
})
export class AppBrowserModule {}
