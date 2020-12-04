import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppAdminExampleTypographyComponent } from "src/app/admin/pages/app-admin-examples/pages/app-admin-example-typography/container/app-admin-example-typography.component";
import { AppAdminExampleTypographyRoutingModule } from "src/app/admin/pages/app-admin-examples/pages/app-admin-example-typography/routes/app-admin-example-typography-routing.module";

const APP_ADMIN_EXAMPLE_TYPOGRAPHY_DECLARATIONS = [AppAdminExampleTypographyComponent];
const APP_ADMIN_EXAMPLE_TYPOGRAPHY_IMPORTS = [CommonModule, AppAdminExampleTypographyRoutingModule];

@NgModule({
  declarations: APP_ADMIN_EXAMPLE_TYPOGRAPHY_DECLARATIONS,
  imports: APP_ADMIN_EXAMPLE_TYPOGRAPHY_IMPORTS
})
export class AppAdminExampleTypographyModule {}
