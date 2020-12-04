import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-admin-example-forms",
  templateUrl: "./app-admin-example-forms.component.html",
  styleUrls: ["./app-admin-example-forms.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppAdminExampleFormsComponent {
  public color;
}
