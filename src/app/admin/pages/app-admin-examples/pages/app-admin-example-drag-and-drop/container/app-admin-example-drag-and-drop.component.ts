import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-admin-example-drag-and-drop",
  templateUrl: "./app-admin-example-drag-and-drop.component.html",
  styleUrls: ["./app-admin-example-drag-and-drop.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppAdminExampleDragAndDropComponent {
  constructor() {}
}
