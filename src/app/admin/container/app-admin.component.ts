import { AfterViewInit, ChangeDetectionStrategy, Component } from "@angular/core";
import { HotkeysHelpComponent, HotkeysService } from "@ngneat/hotkeys";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import { APP_ADMIN_NAVIGATION_MENU } from "src/app/admin/helpers";
import { AppDialogService } from "src/app/core/services/app-dialog/app-dialog.service";
import { AppNavigationMenuInterface } from "src/app/shared/interfaces/components";

@UntilDestroy()
@Component({
  selector: "app-admin",
  templateUrl: "./app-admin.component.html",
  styleUrls: ["./app-admin.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppAdminComponent implements AfterViewInit {
  public readonly navigationMenu: AppNavigationMenuInterface;
  public readonly layoutType: "layout1";

  private readonly _helpShortcut: string;

  constructor(private readonly _hotkeysService: HotkeysService, private readonly _appDialogService: AppDialogService) {
    this.navigationMenu = APP_ADMIN_NAVIGATION_MENU;
    this.layoutType = "layout1";
    this._helpShortcut = "meta./";
  }

  private openHelpModal() {
    const helpComponentConfigs = {
      width: "500px"
    };

    this._appDialogService
      .open({
        component: HotkeysHelpComponent,
        config: helpComponentConfigs
      })
      .pipe(untilDestroyed(this))
      .subscribe();
  }

  ngAfterViewInit(): void {
    this._hotkeysService.registerHelpModal(this.openHelpModal.bind(this), this._helpShortcut);
  }
}
