import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppAdminExampleSnackbarComponent } from "src/app/admin/pages/app-admin-examples/pages/app-admin-example-snackbar/container/app-admin-example-snackbar.component";
import { APP_ADMIN_EXAMPLE_SNACKBAR_ROUTES } from "src/app/admin/pages/app-admin-examples/pages/app-admin-example-snackbar/routes/app-admin-example-snackbar.routes";

const routes: Routes = [
  {
    path: APP_ADMIN_EXAMPLE_SNACKBAR_ROUTES.BASE.path,
    component: AppAdminExampleSnackbarComponent
  }
];

const APP_ADMIN_EXAMPLE_SNACKBAR_ROUTING_IMPORTS = [RouterModule.forChild(routes)];
const APP_ADMIN_EXAMPLE_SNACKBAR_ROUTING_EXPORTS = [RouterModule];

@NgModule({
  imports: APP_ADMIN_EXAMPLE_SNACKBAR_ROUTING_IMPORTS,
  exports: APP_ADMIN_EXAMPLE_SNACKBAR_ROUTING_EXPORTS
})
export class AppAdminExampleSnackbarRoutingModule {}
