import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppAdminExampleDialogComponent } from "src/app/admin/pages/app-admin-examples/pages/app-admin-example-dialog/container/app-admin-example-dialog.component";
import { AppAdminExampleDialogRoutingModule } from "src/app/admin/pages/app-admin-examples/pages/app-admin-example-dialog/routes/app-admin-example-dialog-routing.module";

const APP_ADMIN_EXAMPLE_DIALOG_DECLARATIONS = [AppAdminExampleDialogComponent];
const APP_ADMIN_EXAMPLE_DIALOG_IMPORTS = [CommonModule, AppAdminExampleDialogRoutingModule];

@NgModule({
  declarations: APP_ADMIN_EXAMPLE_DIALOG_DECLARATIONS,
  imports: APP_ADMIN_EXAMPLE_DIALOG_IMPORTS
})
export class AppAdminExampleDialogModule {}
