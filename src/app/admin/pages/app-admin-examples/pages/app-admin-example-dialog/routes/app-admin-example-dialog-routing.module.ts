import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppAdminExampleDialogComponent } from "src/app/admin/pages/app-admin-examples/pages/app-admin-example-dialog/container/app-admin-example-dialog.component";
import { APP_ADMIN_EXAMPLE_DIALOG_ROUTES } from "src/app/admin/pages/app-admin-examples/pages/app-admin-example-dialog/routes/app-admin-example-dialog.routes";

const routes: Routes = [
  {
    path: APP_ADMIN_EXAMPLE_DIALOG_ROUTES.BASE.path,
    component: AppAdminExampleDialogComponent
  }
];

const APP_ADMIN_EXAMPLE_DIALOG_ROUTING_IMPORTS = [RouterModule.forChild(routes)];
const APP_ADMIN_EXAMPLE_DIALOG_ROUTING_EXPORTS = [RouterModule];

@NgModule({
  imports: APP_ADMIN_EXAMPLE_DIALOG_ROUTING_IMPORTS,
  exports: APP_ADMIN_EXAMPLE_DIALOG_ROUTING_EXPORTS
})
export class AppAdminExampleDialogRoutingModule {}
