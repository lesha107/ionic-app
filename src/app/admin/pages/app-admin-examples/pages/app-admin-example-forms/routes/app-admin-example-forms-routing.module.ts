import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppAdminExampleFormsComponent } from "src/app/admin/pages/app-admin-examples/pages/app-admin-example-forms/container/app-admin-example-forms.component";
import { APP_ADMIN_EXAMPLE_FORMS_ROUTES } from "src/app/admin/pages/app-admin-examples/pages/app-admin-example-forms/routes/app-admin-example-forms.routes";

const routes: Routes = [
  {
    path: APP_ADMIN_EXAMPLE_FORMS_ROUTES.BASE.path,
    component: AppAdminExampleFormsComponent
  }
];

const APP_ADMIN_EXAMPLE_FORMS_ROUTING_IMPORTS = [RouterModule.forChild(routes)];
const APP_ADMIN_EXAMPLE_FORMS_ROUTING_EXPORTS = [RouterModule];

@NgModule({
  imports: APP_ADMIN_EXAMPLE_FORMS_ROUTING_IMPORTS,
  exports: APP_ADMIN_EXAMPLE_FORMS_ROUTING_EXPORTS
})
export class AppAdminExampleFormsRoutingModule {}
