import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppAuthComponent } from "src/app/auth/container/app-auth.component";
import { AppAuthRoutingModule } from "src/app/auth/routes/app-auth-routing.module";
import { RouterModule } from "@angular/router";

const APP_AUTH_DECLARATIONS = [AppAuthComponent];
const APP_AUTH_IMPORTS = [CommonModule, RouterModule, AppAuthRoutingModule];

@NgModule({
  declarations: APP_AUTH_DECLARATIONS,
  imports: APP_AUTH_IMPORTS
})
export class AppAuthModule {}
