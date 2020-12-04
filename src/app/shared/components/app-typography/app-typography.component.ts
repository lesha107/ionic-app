import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";

@Component({
  selector: "app-typography",
  templateUrl: "./app-typography.component.html",
  styleUrls: ["./app-typography.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppTypographyComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
