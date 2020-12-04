import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-auth",
  templateUrl: "./app-auth.component.html",
  styleUrls: ["./app-auth.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppAuthComponent {}
