import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppAdminExampleSkeletonComponent } from "src/app/admin/pages/app-admin-examples/pages/app-admin-example-skeleton/container/app-admin-example-skeleton.component";
import { APP_ADMIN_EXAMPLE_SKELETON_ROUTES } from "src/app/admin/pages/app-admin-examples/pages/app-admin-example-skeleton/routes/app-admin-example-skeleton.routes";

const routes: Routes = [
  {
    path: APP_ADMIN_EXAMPLE_SKELETON_ROUTES.BASE.path,
    component: AppAdminExampleSkeletonComponent
  }
];

const APP_ADMIN_EXAMPLE_SKELETON_ROUTING_IMPORTS = [RouterModule.forChild(routes)];
const APP_ADMIN_EXAMPLE_SKELETON_ROUTING_EXPORTS = [RouterModule];

@NgModule({
  imports: APP_ADMIN_EXAMPLE_SKELETON_ROUTING_IMPORTS,
  exports: APP_ADMIN_EXAMPLE_SKELETON_ROUTING_EXPORTS
})
export class AppAdminExampleSkeletonRoutingModule {}
