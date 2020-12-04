import { DragDropModule } from "@angular/cdk/drag-drop";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { MatTableModule } from "@angular/material/table";
import { AppAdminExampleTableComponent } from "src/app/admin/pages/app-admin-examples/pages/app-admin-example-table/container/app-admin-example-table.component";
import { AppAdminExampleTableRoutingModule } from "src/app/admin/pages/app-admin-examples/pages/app-admin-example-table/routes/app-admin-example-table-routing.module";

const APP_ADMIN_EXAMPLE_TABLE_DECLARATIONS = [AppAdminExampleTableComponent];
const APP_ADMIN_EXAMPLE_TABLE_IMPORTS = [
  CommonModule,
  AppAdminExampleTableRoutingModule,
  MatTableModule,
  MatIconModule,
  DragDropModule
];

@NgModule({
  declarations: APP_ADMIN_EXAMPLE_TABLE_DECLARATIONS,
  imports: APP_ADMIN_EXAMPLE_TABLE_IMPORTS
})
export class AppAdminExampleTableModule {}
