import { NgModule } from "@angular/core";
import { AppAuthSignInComponent } from "src/app/auth/pages/app-auth-sign-in/container/app-auth-sign-in.component";
import { AppAuthSignInRoutingModule } from "src/app/auth/pages/app-auth-sign-in/routes/app-auth-sign-in-routing.module";
import { AppSharedModule } from "src/app/shared/app-shared.module";

const APP_AUTH_SIGN_IN_DECLARATIONS = [AppAuthSignInComponent];
const APP_AUTH_SIGN_IN_IMPORTS = [AppSharedModule, AppAuthSignInRoutingModule];

@NgModule({
  declarations: APP_AUTH_SIGN_IN_DECLARATIONS,
  imports: APP_AUTH_SIGN_IN_IMPORTS
})
export class AppAuthSignInModule {}
