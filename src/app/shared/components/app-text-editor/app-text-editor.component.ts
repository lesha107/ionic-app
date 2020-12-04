import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-text-editor",
  templateUrl: "./app-text-editor.component.html",
  styleUrls: ["./app-text-editor.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppTextEditorComponent {}
