import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppAdminExampleTableComponent } from "src/app/admin/pages/app-admin-examples/pages/app-admin-example-table/container/app-admin-example-table.component";
import { APP_ADMIN_EXAMPLE_TABLE_ROUTES } from "src/app/admin/pages/app-admin-examples/pages/app-admin-example-table/routes/app-admin-example-table.routes";

const routes: Routes = [
  {
    path: APP_ADMIN_EXAMPLE_TABLE_ROUTES.BASE.path,
    component: AppAdminExampleTableComponent
  }
];

const APP_ADMIN_EXAMPLE_TABLE_ROUTING_IMPORTS = [RouterModule.forChild(routes)];
const APP_ADMIN_EXAMPLE_TABLE_ROUTING_EXPORTS = [RouterModule];

@NgModule({
  imports: APP_ADMIN_EXAMPLE_TABLE_ROUTING_IMPORTS,
  exports: APP_ADMIN_EXAMPLE_TABLE_ROUTING_EXPORTS
})
export class AppAdminExampleTableRoutingModule {}
