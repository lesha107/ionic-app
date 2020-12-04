import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppAdminExampleListComponent } from "src/app/admin/pages/app-admin-examples/pages/app-admin-example-list/container/app-admin-example-list.component";
import { AppAdminExampleListRoutingModule } from "src/app/admin/pages/app-admin-examples/pages/app-admin-example-list/routes/app-admin-example-list-routing.module";

const APP_ADMIN_EXAMPLE_LIST_DECLARATIONS = [AppAdminExampleListComponent];
const APP_ADMIN_EXAMPLE_LIST_IMPORTS = [CommonModule, AppAdminExampleListRoutingModule];

@NgModule({
  declarations: APP_ADMIN_EXAMPLE_LIST_DECLARATIONS,
  imports: APP_ADMIN_EXAMPLE_LIST_IMPORTS
})
export class AppAdminExampleListModule {}
