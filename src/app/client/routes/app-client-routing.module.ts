import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppClientComponent } from "src/app/client/container/app-client.component";
import { APP_CLIENT_ROUTES } from "src/app/client/routes/app-client-routes";

const routes: Routes = [
  {
    path: APP_CLIENT_ROUTES.BASE.path,
    component: AppClientComponent
  },
  {
    path: "**",
    redirectTo: APP_CLIENT_ROUTES.BASE.path
  }
];

const APP_CORE_ROUTING_IMPORTS = [RouterModule.forChild(routes)];
const APP_CORE_ROUTING_EXPORTS = [RouterModule];

@NgModule({
  imports: APP_CORE_ROUTING_IMPORTS,
  exports: APP_CORE_ROUTING_EXPORTS
})
export class AppClientRoutingModule {}
