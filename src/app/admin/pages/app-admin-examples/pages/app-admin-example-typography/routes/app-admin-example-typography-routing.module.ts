import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppAdminExampleTypographyComponent } from "src/app/admin/pages/app-admin-examples/pages/app-admin-example-typography/container/app-admin-example-typography.component";
import { APP_ADMIN_EXAMPLE_TYPOGRAPHY_ROUTES } from "src/app/admin/pages/app-admin-examples/pages/app-admin-example-typography/routes/app-admin-example-typography.routes";

const routes: Routes = [
  {
    path: APP_ADMIN_EXAMPLE_TYPOGRAPHY_ROUTES.BASE.path,
    component: AppAdminExampleTypographyComponent
  }
];

const APP_ADMIN_EXAMPLE_TYPOGRAPHY_ROUTING_IMPORTS = [RouterModule.forChild(routes)];
const APP_ADMIN_EXAMPLE_TYPOGRAPHY_ROUTING_EXPORTS = [RouterModule];

@NgModule({
  imports: APP_ADMIN_EXAMPLE_TYPOGRAPHY_ROUTING_IMPORTS,
  exports: APP_ADMIN_EXAMPLE_TYPOGRAPHY_ROUTING_EXPORTS
})
export class AppAdminExampleTypographyRoutingModule {}
