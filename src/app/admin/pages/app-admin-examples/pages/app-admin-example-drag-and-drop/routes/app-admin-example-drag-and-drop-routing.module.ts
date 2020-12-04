import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppAdminExampleDragAndDropComponent } from "src/app/admin/pages/app-admin-examples/pages/app-admin-example-drag-and-drop/container/app-admin-example-drag-and-drop.component";
import { APP_ADMIN_EXAMPLE_DRAG_AND_DROP_ROUTES } from "src/app/admin/pages/app-admin-examples/pages/app-admin-example-drag-and-drop/routes/app-admin-example-drag-and-drop.routes";

const routes: Routes = [
  {
    path: APP_ADMIN_EXAMPLE_DRAG_AND_DROP_ROUTES.BASE.path,
    component: AppAdminExampleDragAndDropComponent
  }
];

const APP_ADMIN_EXAMPLE_DRAG_AND_DROP_ROUTING_IMPORTS = [RouterModule.forChild(routes)];
const APP_ADMIN_EXAMPLE_DRAG_AND_DROP_ROUTING_EXPORTS = [RouterModule];

@NgModule({
  imports: APP_ADMIN_EXAMPLE_DRAG_AND_DROP_ROUTING_IMPORTS,
  exports: APP_ADMIN_EXAMPLE_DRAG_AND_DROP_ROUTING_EXPORTS
})
export class AppAdminExampleDragAndDropRoutingModule {}
