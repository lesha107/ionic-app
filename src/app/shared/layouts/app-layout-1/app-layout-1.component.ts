import { transition, trigger, useAnimation } from "@angular/animations";
import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";
import { MatSidenav } from "@angular/material/sidenav";
import { HotkeysService } from "@ngneat/hotkeys";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import { fadeInDown, fadeInUp, fadeOutDown, fadeOutUp, slideInDown, slideInUp, slideOutUp } from "ng-animate";
import { Observable } from "rxjs";
import { AppConfigStateInterface } from "src/app/core/interfaces/store";
import { AppConfigService } from "src/app/core/services/app-config/app-config.service";
import { AppDialogService } from "src/app/core/services/app-dialog/app-dialog.service";
import { AppConfigQuery } from "src/app/core/store/app-config";
import { AppSearchComponent } from "src/app/shared/components";
import { AppNavigationMenuInterface, AppSidenavMode } from "src/app/shared/interfaces/components";
import { AppHotkeyInterface } from "src/app/shared/interfaces/services";

@UntilDestroy()
@Component({
  selector: "app-layout-1",
  templateUrl: "./app-layout-1.component.html",
  styleUrls: ["./app-layout-1.component.scss"],
  animations: [
    trigger("searchFilterBar", [
      transition(
        ":enter",
        useAnimation(slideInUp, {
          params: { timing: 0.2 }
        })
      ),
      transition(
        ":leave",
        useAnimation(slideOutUp, {
          params: { timing: 0.2 }
        })
      )
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppLayout1Component implements OnInit {
  @Input() public readonly navigationMenu: AppNavigationMenuInterface;

  public leftSidenavMode: AppSidenavMode;
  public rightSidenavMode: AppSidenavMode;

  public readonly isLeftSideavOpened$: Observable<boolean>;
  public readonly isRightSideavOpened$: Observable<boolean>;

  private readonly _searchHotkey: AppHotkeyInterface;

  public showSearchFilterBar: boolean;

  constructor(
    private readonly _hotkeysService: HotkeysService,
    private readonly _appConfigQuery: AppConfigQuery,
    private readonly _appConfigService: AppConfigService,
    private readonly _appDialogService: AppDialogService
  ) {
    this.isLeftSideavOpened$ = this._appConfigQuery.isLeftSidenavOpened$;
    this.isRightSideavOpened$ = this._appConfigQuery.isRightSidenavOpened$;

    this.leftSidenavMode = "side";
    this.rightSidenavMode = "side";

    this.showSearchFilterBar = false;

    this._searchHotkey = {
      keys: "meta.f",
      group: "Admin",
      description: "Search"
    };
  }

  ngOnInit(): void {
    this.subscribeOnOpenShortcut();
  }

  public async toggleSidenav(sidenav: MatSidenav, storeKey: keyof AppConfigStateInterface): Promise<void> {
    await sidenav.toggle();
    this._appConfigService.toggleSidenav(storeKey);
  }

  public toggleSearchFilterBar(): void {
    this.showSearchFilterBar = !this.showSearchFilterBar;
  }

  public openSearchDialog(): void {
    const data = {
      navigationMenu: this.navigationMenu
    };

    this._appDialogService
      .open({
        data,
        component: AppSearchComponent,
        fullSize: true
      })
      .subscribe(result => {
        console.log(result);
      });
  }

  private subscribeOnOpenShortcut() {
    this._hotkeysService
      .addShortcut(this._searchHotkey)
      .pipe(untilDestroyed(this))
      .subscribe(() => {
        this.openSearchDialog();
      });
  }
}
