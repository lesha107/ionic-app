import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppAdminExampleListComponent } from "src/app/admin/pages/app-admin-examples/pages/app-admin-example-list/container/app-admin-example-list.component";
import { APP_ADMIN_EXAMPLE_LIST_ROUTES } from "src/app/admin/pages/app-admin-examples/pages/app-admin-example-list/routes/app-admin-example-list.routes";

const routes: Routes = [
  {
    path: APP_ADMIN_EXAMPLE_LIST_ROUTES.BASE.path,
    component: AppAdminExampleListComponent
  }
];

const APP_ADMIN_EXAMPLE_LIST_ROUTING_IMPORTS = [RouterModule.forChild(routes)];
const APP_ADMIN_EXAMPLE_LIST_ROUTING_EXPORTS = [RouterModule];

@NgModule({
  imports: APP_ADMIN_EXAMPLE_LIST_ROUTING_IMPORTS,
  exports: APP_ADMIN_EXAMPLE_LIST_ROUTING_EXPORTS
})
export class AppAdminExampleListRoutingModule {}
