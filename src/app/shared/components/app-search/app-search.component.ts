import { ChangeDetectionStrategy, Component, Inject } from "@angular/core";
import { FormControl } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";
import { AppNavigationMenuInterface } from "src/app/shared/interfaces/components";

export interface AppSearchDialogArgsInterface {
  navigationMenu: AppNavigationMenuInterface;
}

@Component({
  selector: "app-search",
  templateUrl: "./app-search.component.html",
  styleUrls: ["./app-search.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppSearchComponent {
  public readonly searchControl: FormControl;
  public readonly searchedLinks: Observable<AppNavigationMenuInterface>;

  constructor(
    private readonly _dialogRef: MatDialogRef<AppSearchComponent>,
    @Inject(MAT_DIALOG_DATA)
    private readonly _data: AppSearchDialogArgsInterface
  ) {
    this.searchControl = new FormControl("");
    this.searchedLinks = this.getSearchedLinks();
  }

  private getPages(navigationMenu: AppNavigationMenuInterface): AppNavigationMenuInterface {
    return navigationMenu
      .filter(x => x.type === "link" || x.type === "group")
      .reduce(
        (previousValue, currentValue) => [
          ...previousValue,
          ...(currentValue.type === "link" ? [currentValue] : this.getPages(currentValue.children))
        ],
        []
      );
  }

  private getSearchedLinks(): Observable<AppNavigationMenuInterface> {
    return this.searchControl.valueChanges.pipe(
      startWith(""),
      map((search: string) => {
        const pages = this.getPages(this._data.navigationMenu);

        if (!search) {
          return pages;
        }

        return pages.filter(x => x.name.includes(search));
      })
    );
  }
  onNoClick(): void {
    this._dialogRef.close();
  }
}
