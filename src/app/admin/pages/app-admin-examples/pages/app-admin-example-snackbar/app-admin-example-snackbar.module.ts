import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppAdminExampleSnackbarComponent } from "src/app/admin/pages/app-admin-examples/pages/app-admin-example-snackbar/container/app-admin-example-snackbar.component";
import { AppAdminExampleSnackbarRoutingModule } from "src/app/admin/pages/app-admin-examples/pages/app-admin-example-snackbar/routes/app-admin-example-snackbar-routing.module";

const APP_ADMIN_EXAMPLE_SNACKBAR_DECLARATIONS = [AppAdminExampleSnackbarComponent];
const APP_ADMIN_EXAMPLE_SNACKBAR_IMPORTS = [CommonModule, AppAdminExampleSnackbarRoutingModule];

@NgModule({
  declarations: APP_ADMIN_EXAMPLE_SNACKBAR_DECLARATIONS,
  imports: APP_ADMIN_EXAMPLE_SNACKBAR_IMPORTS
})
export class AppAdminExampleSnackbarModule {}
