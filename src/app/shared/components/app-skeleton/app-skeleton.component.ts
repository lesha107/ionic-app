import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
  selector: "app-skeleton",
  templateUrl: "./app-skeleton.component.html",
  styleUrls: ["./app-skeleton.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppSkeletonComponent {
  @Input() items: any;

  public readonly defaultAppearance: "line" | "circle" = "line";
  public readonly defaultCount = 1;
  public readonly defaultAnimation: "pulse" | "loader" = "pulse";
}
