import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppAuthSignUpComponent } from "src/app/auth/pages/app-auth-sign-up/container/app-auth-sign-up.component";
import { APP_AUTH_SIGN_UP_ROUTES } from "src/app/auth/pages/app-auth-sign-up/routes/app-auth-sign-up.routes";

const routes: Routes = [
  {
    path: APP_AUTH_SIGN_UP_ROUTES.BASE.path,
    component: AppAuthSignUpComponent
  }
];

const APP_AUTH_SIGN_UP_ROUTING_IMPORTS = [RouterModule.forChild(routes)];
const APP_AUTH_SIGN_UP_ROUTING_EXPORTS = [RouterModule];

@NgModule({
  imports: APP_AUTH_SIGN_UP_ROUTING_IMPORTS,
  exports: APP_AUTH_SIGN_UP_ROUTING_EXPORTS
})
export class AppAuthSignUpRoutingModule {}
