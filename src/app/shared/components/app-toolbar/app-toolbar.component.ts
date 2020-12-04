import { ChangeDetectionStrategy, Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-toolbar",
  templateUrl: "./app-toolbar.component.html",
  styleUrls: ["./app-toolbar.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppToolbarComponent {
  @Output() private readonly searchClicked: EventEmitter<void>;

  constructor() {
    this.searchClicked = new EventEmitter();
  }

  public emitSearchClick(): void {
    this.searchClicked.emit();
  }
}
