import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { APP_CORE_ROUTES } from "src/app/core/routes/app-core-routes";

const routes: Routes = [
  {
    path: APP_CORE_ROUTES.AUTH.path,
    loadChildren: () => import("src/app/auth/app-auth.module").then(m => m.AppAuthModule)
  },
  {
    path: APP_CORE_ROUTES.CLIENT.path,
    loadChildren: () => import("src/app/client/app-client.module").then(m => m.AppClientModule)
  },
  {
    path: APP_CORE_ROUTES.ADMIN.path,
    loadChildren: () => import("src/app/admin/app-admin.module").then(m => m.AppAdminModule)
  },
  {
    path: "**",
    redirectTo: APP_CORE_ROUTES.AUTH.path
  }
];

const APP_CORE_ROUTING_IMPORTS = [
  RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
    initialNavigation: "enabled",
    paramsInheritanceStrategy: "always"
  })
];
const APP_CORE_ROUTING_EXPORTS = [RouterModule];

@NgModule({
  imports: APP_CORE_ROUTING_IMPORTS,
  exports: APP_CORE_ROUTING_EXPORTS
})
export class AppCoreRoutingModule {}
