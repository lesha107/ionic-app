import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppAuthSignInComponent } from "src/app/auth/pages/app-auth-sign-in/container/app-auth-sign-in.component";
import { APP_AUTH_SIGN_IN_ROUTES } from "src/app/auth/pages/app-auth-sign-in/routes/app-auth-sign-in.routes";

const routes: Routes = [
  {
    path: APP_AUTH_SIGN_IN_ROUTES.BASE.path,
    component: AppAuthSignInComponent
  }
];

const APP_AUTH_SIGN_IN_ROUTING_IMPORTS = [RouterModule.forChild(routes)];
const APP_AUTH_SIGN_IN_ROUTING_EXPORTS = [RouterModule];

@NgModule({
  imports: APP_AUTH_SIGN_IN_ROUTING_IMPORTS,
  exports: APP_AUTH_SIGN_IN_ROUTING_EXPORTS
})
export class AppAuthSignInRoutingModule {}
