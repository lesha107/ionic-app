import { NgModule } from "@angular/core";
import { AppAuthSignUpComponent } from "src/app/auth/pages/app-auth-sign-up/container/app-auth-sign-up.component";
import { AppAuthSignUpRoutingModule } from "src/app/auth/pages/app-auth-sign-up/routes/app-auth-sign-up-routing.module";
import { AppSharedModule } from "src/app/shared/app-shared.module";

const APP_AUTH_SIGN_UP_DECLARATIONS = [AppAuthSignUpComponent];
const APP_AUTH_SIGN_UP_IMPORTS = [AppSharedModule, AppAuthSignUpRoutingModule];

@NgModule({
  declarations: APP_AUTH_SIGN_UP_DECLARATIONS,
  imports: APP_AUTH_SIGN_UP_IMPORTS
})
export class AppAuthSignUpModule {}
