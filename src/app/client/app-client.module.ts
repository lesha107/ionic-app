import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppClientComponent } from "src/app/client/container/app-client.component";
import { AppClientRoutingModule } from "src/app/client/routes/app-client-routing.module";
import { AppSharedModule } from "src/app/shared/app-shared.module";

const APP_CLIENT_DECLARATIONS = [AppClientComponent];
const APP_CLIENT_IMPORTS = [CommonModule, AppSharedModule, AppClientRoutingModule];

@NgModule({
  declarations: APP_CLIENT_DECLARATIONS,
  imports: APP_CLIENT_IMPORTS
})
export class AppClientModule {}
