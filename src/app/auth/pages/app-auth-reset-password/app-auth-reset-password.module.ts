import { NgModule } from "@angular/core";
import { AppAuthResetPasswordComponent } from "src/app/auth/pages/app-auth-reset-password/container/app-auth-reset-password.component";
import { AppAuthResetPasswordRoutingModule } from "src/app/auth/pages/app-auth-reset-password/routes/app-auth-reset-password-routing.module";
import { AppSharedModule } from "src/app/shared/app-shared.module";

const APP_AUTH_RESET_PASSWORD_DECLARATIONS = [AppAuthResetPasswordComponent];
const APP_AUTH_RESET_PASSWORD_IMPORTS = [AppSharedModule, AppAuthResetPasswordRoutingModule];

@NgModule({
  declarations: APP_AUTH_RESET_PASSWORD_DECLARATIONS,
  imports: APP_AUTH_RESET_PASSWORD_IMPORTS
})
export class AppAuthResetPasswordModule {}
