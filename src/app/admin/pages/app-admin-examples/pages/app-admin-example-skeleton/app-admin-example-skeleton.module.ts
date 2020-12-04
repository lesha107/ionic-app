import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppAdminExampleSkeletonComponent } from "src/app/admin/pages/app-admin-examples/pages/app-admin-example-skeleton/container/app-admin-example-skeleton.component";
import { AppAdminExampleSkeletonRoutingModule } from "src/app/admin/pages/app-admin-examples/pages/app-admin-example-skeleton/routes/app-admin-example-skeleton-routing.module";

const APP_ADMIN_EXAMPLE_SKELETON_DECLARATIONS = [AppAdminExampleSkeletonComponent];
const APP_ADMIN_EXAMPLE_SKELETON_IMPORTS = [CommonModule, AppAdminExampleSkeletonRoutingModule];

@NgModule({
  declarations: APP_ADMIN_EXAMPLE_SKELETON_DECLARATIONS,
  imports: APP_ADMIN_EXAMPLE_SKELETON_IMPORTS
})
export class AppAdminExampleSkeletonModule {}
