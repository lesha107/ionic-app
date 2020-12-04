import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppAuthComponent } from "src/app/auth/container/app-auth.component";
import { APP_AUTH_ROUTES } from "src/app/auth/routes/app-auth.routes";

const routes: Routes = [
  {
    path: APP_AUTH_ROUTES.BASE.path,
    component: AppAuthComponent,
    children: [
      {
        path: APP_AUTH_ROUTES.SIGN_IN.path,
        loadChildren: () =>
          import("src/app/auth/pages/app-auth-sign-in/app-auth-sign-in.module").then(m => m.AppAuthSignInModule)
      },
      {
        path: APP_AUTH_ROUTES.SIGN_UP.path,
        loadChildren: () =>
          import("src/app/auth/pages/app-auth-sign-up/app-auth-sign-up.module").then(m => m.AppAuthSignUpModule)
      },
      {
        path: APP_AUTH_ROUTES.RESET_PASSWORD.path,
        loadChildren: () =>
          import("src/app/auth/pages/app-auth-reset-password/app-auth-reset-password.module").then(
            m => m.AppAuthResetPasswordModule
          )
      },
      {
        path: "**",
        redirectTo: APP_AUTH_ROUTES.SIGN_IN.path
      }
    ]
  },
  {
    path: "**",
    redirectTo: APP_AUTH_ROUTES.BASE.path
  }
];

const APP_AUTH_ROUTING_IMPORTS = [RouterModule.forChild(routes)];
const APP_AUTH_ROUTING_EXPORTS = [RouterModule];

@NgModule({
  imports: APP_AUTH_ROUTING_IMPORTS,
  exports: APP_AUTH_ROUTING_EXPORTS
})
export class AppAuthRoutingModule {}
