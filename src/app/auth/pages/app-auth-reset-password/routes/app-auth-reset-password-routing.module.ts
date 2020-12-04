import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppAuthResetPasswordComponent } from "src/app/auth/pages/app-auth-reset-password/container/app-auth-reset-password.component";
import { APP_AUTH_RESET_PASSWORD_ROUTES } from "src/app/auth/pages/app-auth-reset-password/routes/app-auth-reset-password.routes";

const routes: Routes = [
  {
    path: APP_AUTH_RESET_PASSWORD_ROUTES.BASE.path,
    component: AppAuthResetPasswordComponent
  }
];

const APP_AUTH_RESET_PASSWORD_ROUTING_IMPORTS = [RouterModule.forChild(routes)];
const APP_AUTH_RESET_PASSWORD_ROUTING_EXPORTS = [RouterModule];

@NgModule({
  imports: APP_AUTH_RESET_PASSWORD_ROUTING_IMPORTS,
  exports: APP_AUTH_RESET_PASSWORD_ROUTING_EXPORTS
})
export class AppAuthResetPasswordRoutingModule {}
