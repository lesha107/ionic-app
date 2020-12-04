import { NgModule } from "@angular/core";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { ServerModule } from "@angular/platform-server";
import { AppCoreModule } from "src/app/core/app-core.module";
import { AppCoreComponent } from "src/app/core/container/app-core.component";
import { FlexLayoutServerModule } from "@angular/flex-layout/server";

const APP_SERVER_IMPORTS = [AppCoreModule, ServerModule, NoopAnimationsModule, FlexLayoutServerModule];
const APP_SERVER_BOOTSTRAP = [AppCoreComponent];

@NgModule({
  imports: APP_SERVER_IMPORTS,
  bootstrap: APP_SERVER_BOOTSTRAP
})
export class AppServerModule {}
