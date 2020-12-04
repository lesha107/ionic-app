import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppAdminExampleCalendarComponent } from "src/app/admin/pages/app-admin-examples/pages/app-admin-example-calendar/container/app-admin-example-calendar.component";
import { AppAdminExampleCalendarRoutingModule } from "src/app/admin/pages/app-admin-examples/pages/app-admin-example-calendar/routes/app-admin-example-calendar-routing.module";

const APP_ADMIN_EXAMPLE_CALENDAR_DECLARATIONS = [AppAdminExampleCalendarComponent];
const APP_ADMIN_EXAMPLE_CALENDAR_IMPORTS = [CommonModule, AppAdminExampleCalendarRoutingModule];

@NgModule({
  declarations: APP_ADMIN_EXAMPLE_CALENDAR_DECLARATIONS,
  imports: APP_ADMIN_EXAMPLE_CALENDAR_IMPORTS
})
export class AppAdminExampleCalendarModule {}
