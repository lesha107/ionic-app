import { DragDropModule } from "@angular/cdk/drag-drop";
import { CdkTreeModule } from "@angular/cdk/tree";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatTreeModule } from "@angular/material/tree";
import { AppAdminExampleDragAndDropComponent } from "src/app/admin/pages/app-admin-examples/pages/app-admin-example-drag-and-drop/container/app-admin-example-drag-and-drop.component";
import { AppAdminExampleDragAndDropRoutingModule } from "src/app/admin/pages/app-admin-examples/pages/app-admin-example-drag-and-drop/routes/app-admin-example-drag-and-drop-routing.module";

const APP_ADMIN_EXAMPLE_DRAG_AND_DROP_DECLARATIONS = [AppAdminExampleDragAndDropComponent];
const APP_ADMIN_EXAMPLE_DRAG_AND_DROP_IMPORTS = [
  CommonModule,
  AppAdminExampleDragAndDropRoutingModule,
  MatButtonModule,
  MatIconModule,
  DragDropModule,
  MatTreeModule
];

@NgModule({
  declarations: APP_ADMIN_EXAMPLE_DRAG_AND_DROP_DECLARATIONS,
  imports: APP_ADMIN_EXAMPLE_DRAG_AND_DROP_IMPORTS
})
export class AppAdminExampleDragAndDropModule {}
