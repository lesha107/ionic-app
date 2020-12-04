import { ChangeDetectionStrategy, Component } from "@angular/core";
import { APP_CLIENT_NAVIGATION_MENU } from "src/app/client/navigation";
import { AppNavigationMenuInterface } from "src/app/shared/interfaces/components";

@Component({
  selector: "app-client",
  templateUrl: "./app-client.component.html",
  styleUrls: ["./app-client.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppClientComponent {
  public readonly navigationMenu: AppNavigationMenuInterface;
  public readonly layoutType: "layout1";

  constructor() {
    this.layoutType = "layout1";
    this.navigationMenu = APP_CLIENT_NAVIGATION_MENU;
  }
}
