import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppAdminExamplesComponent } from "src/app/admin/pages/app-admin-examples/container/app-admin-examples.component";
import { APP_ADMIN_EXAMPLES_ROUTES } from "src/app/admin/pages/app-admin-examples/routes/app-admin-examples.routes";

const routes: Routes = [
  {
    path: APP_ADMIN_EXAMPLES_ROUTES.BASE.path,
    component: AppAdminExamplesComponent
  },
  {
    path: APP_ADMIN_EXAMPLES_ROUTES.CALENDAR.path,
    loadChildren: () =>
      import(
        "src/app/admin/pages/app-admin-examples/pages/app-admin-example-calendar/app-admin-example-calendar.module"
      ).then(m => m.AppAdminExampleCalendarModule)
  },
  {
    path: APP_ADMIN_EXAMPLES_ROUTES.FORMS.path,
    loadChildren: () =>
      import(
        "src/app/admin/pages/app-admin-examples/pages/app-admin-example-forms/app-admin-example-forms.module"
      ).then(m => m.AppAdminExampleFormsModule)
  },
  {
    path: APP_ADMIN_EXAMPLES_ROUTES.SKELETON.path,
    loadChildren: () =>
      import(
        "src/app/admin/pages/app-admin-examples/pages/app-admin-example-skeleton/app-admin-example-skeleton.module"
      ).then(m => m.AppAdminExampleSkeletonModule)
  },
  {
    path: APP_ADMIN_EXAMPLES_ROUTES.TYPOGRAPHY.path,
    loadChildren: () =>
      import(
        "src/app/admin/pages/app-admin-examples/pages/app-admin-example-typography/app-admin-example-typography.module"
      ).then(m => m.AppAdminExampleTypographyModule)
  },
  {
    path: APP_ADMIN_EXAMPLES_ROUTES.DRAG_AND_DROP.path,
    loadChildren: () =>
      import(
        "src/app/admin/pages/app-admin-examples/pages/app-admin-example-drag-and-drop/app-admin-example-drag-and-drop.module"
      ).then(m => m.AppAdminExampleDragAndDropModule)
  },
  {
    path: APP_ADMIN_EXAMPLES_ROUTES.LIST.path,
    loadChildren: () =>
      import("src/app/admin/pages/app-admin-examples/pages/app-admin-example-list/app-admin-example-list.module").then(
        m => m.AppAdminExampleListModule
      )
  },
  {
    path: APP_ADMIN_EXAMPLES_ROUTES.DIALOG.path,
    loadChildren: () =>
      import(
        "src/app/admin/pages/app-admin-examples/pages/app-admin-example-dialog/app-admin-example-dialog.module"
      ).then(m => m.AppAdminExampleDialogModule)
  },
  {
    path: APP_ADMIN_EXAMPLES_ROUTES.SNACKBAR.path,
    loadChildren: () =>
      import(
        "src/app/admin/pages/app-admin-examples/pages/app-admin-example-snackbar/app-admin-example-snackbar.module"
      ).then(m => m.AppAdminExampleSnackbarModule)
  },
  {
    path: APP_ADMIN_EXAMPLES_ROUTES.TABLE.path,
    loadChildren: () =>
      import(
        "src/app/admin/pages/app-admin-examples/pages/app-admin-example-table/app-admin-example-table.module"
      ).then(m => m.AppAdminExampleTableModule)
  }
];

const APP_ADMIN_EXAMPLES_ROUTING_IMPORTS = [RouterModule.forChild(routes)];
const APP_ADMIN_EXAMPLES_ROUTING_EXPORTS = [RouterModule];

@NgModule({
  imports: APP_ADMIN_EXAMPLES_ROUTING_IMPORTS,
  exports: APP_ADMIN_EXAMPLES_ROUTING_EXPORTS
})
export class AppAdminExamplesRoutingModule {}
