import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppAdminExampleFormsComponent } from "src/app/admin/pages/app-admin-examples/pages/app-admin-example-forms/container/app-admin-example-forms.component";
import { AppAdminExampleFormsRoutingModule } from "src/app/admin/pages/app-admin-examples/pages/app-admin-example-forms/routes/app-admin-example-forms-routing.module";

const APP_ADMIN_EXAMPLE_FORMS_DECLARATIONS = [AppAdminExampleFormsComponent];
const APP_ADMIN_EXAMPLE_FORMS_IMPORTS = [CommonModule, AppAdminExampleFormsRoutingModule];

@NgModule({
  declarations: APP_ADMIN_EXAMPLE_FORMS_DECLARATIONS,
  imports: APP_ADMIN_EXAMPLE_FORMS_IMPORTS
})
export class AppAdminExampleFormsModule {}
