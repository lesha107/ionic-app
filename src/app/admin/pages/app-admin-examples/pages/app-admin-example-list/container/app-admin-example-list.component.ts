import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-admin-example-list",
  templateUrl: "./app-admin-example-list.component.html",
  styleUrls: ["./app-admin-example-list.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppAdminExampleListComponent {}
