import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppAdminComponent } from "src/app/admin/container/app-admin.component";
import { APP_ADMIN_ROUTES } from "src/app/admin/routes/app-admin.routes";

const routes: Routes = [
  {
    path: APP_ADMIN_ROUTES.BASE.path,
    component: AppAdminComponent,
    children: [
      {
        path: APP_ADMIN_ROUTES.EXAMPLES.path,
        loadChildren: () =>
          import("src/app/admin/pages/app-admin-examples/app-admin-examples.module").then(m => m.AppAdminExamplesModule)
      },
      {
        path: "**",
        redirectTo: APP_ADMIN_ROUTES.EXAMPLES.path
      }
    ]
  },
  {
    path: "**",
    redirectTo: APP_ADMIN_ROUTES.BASE.path
  }
];

const APP_ADMIN_ROUTING_IMPORTS = [RouterModule.forChild(routes)];
const APP_ADMIN_ROUTING_EXPORTS = [RouterModule];

@NgModule({
  imports: APP_ADMIN_ROUTING_IMPORTS,
  exports: APP_ADMIN_ROUTING_EXPORTS
})
export class AppAdminRoutingModule {}
