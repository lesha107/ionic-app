import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-admin-example-calendar",
  templateUrl: "./app-admin-example-calendar.component.html",
  styleUrls: ["./app-admin-example-calendar.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppAdminExampleCalendarComponent {}
