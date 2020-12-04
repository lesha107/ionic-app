import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppAdminExamplesComponent } from "src/app/admin/pages/app-admin-examples/container/app-admin-examples.component";
import { AppAdminExamplesRoutingModule } from "src/app/admin/pages/app-admin-examples/routes/app-admin-examples-routing.module";

const APP_ADMIN_EXAMPLES_DECLARATIONS = [AppAdminExamplesComponent];
const APP_ADMIN_EXAMPLES_IMPORTS = [CommonModule, AppAdminExamplesRoutingModule];

@NgModule({
  declarations: APP_ADMIN_EXAMPLES_DECLARATIONS,
  imports: APP_ADMIN_EXAMPLES_IMPORTS
})
export class AppAdminExamplesModule {}
