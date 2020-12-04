import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppAdminExampleCalendarComponent } from "src/app/admin/pages/app-admin-examples/pages/app-admin-example-calendar/container/app-admin-example-calendar.component";
import { APP_ADMIN_EXAMPLE_CALENDAR_ROUTES } from "src/app/admin/pages/app-admin-examples/pages/app-admin-example-calendar/routes/app-admin-example-calendar.routes";

const routes: Routes = [
  {
    path: APP_ADMIN_EXAMPLE_CALENDAR_ROUTES.BASE.path,
    component: AppAdminExampleCalendarComponent
  }
];

const APP_ADMIN_EXAMPLE_CALENDAR_ROUTING_IMPORTS = [RouterModule.forChild(routes)];
const APP_ADMIN_EXAMPLE_CALENDAR_ROUTING_EXPORTS = [RouterModule];

@NgModule({
  imports: APP_ADMIN_EXAMPLE_CALENDAR_ROUTING_IMPORTS,
  exports: APP_ADMIN_EXAMPLE_CALENDAR_ROUTING_EXPORTS
})
export class AppAdminExampleCalendarRoutingModule {}
