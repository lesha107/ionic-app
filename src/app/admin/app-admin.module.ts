import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppAdminComponent } from "src/app/admin/container/app-admin.component";
import { AppAdminRoutingModule } from "src/app/admin/routes/app-admin-routing.module";
import { AppSharedModule } from "src/app/shared/app-shared.module";

const APP_ADMIN_DECLARATIONS = [AppAdminComponent];
const APP_ADMIN_IMPORTS = [CommonModule, AppSharedModule, AppAdminRoutingModule];

@NgModule({
  declarations: APP_ADMIN_DECLARATIONS,
  imports: APP_ADMIN_IMPORTS
})
export class AppAdminModule {}
