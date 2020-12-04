import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-admin-example-table",
  templateUrl: "./app-admin-example-table.component.html",
  styleUrls: ["./app-admin-example-table.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppAdminExampleTableComponent {}
