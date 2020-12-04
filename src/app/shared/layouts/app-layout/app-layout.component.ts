import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  TemplateRef,
  ViewChild
} from "@angular/core";
import { AppNavigationMenuInterface } from "src/app/shared/interfaces/components";

@Component({
  selector: "app-layout",
  templateUrl: "./app-layout.component.html",
  styleUrls: ["./app-layout.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppLayoutComponent implements AfterViewInit {
  @ViewChild("layout1") private readonly layout1: TemplateRef<HTMLElement>;

  @Input() private readonly type: "layout1";

  @Input() public navigationMenu: AppNavigationMenuInterface;

  constructor(private readonly changeDetectorRef: ChangeDetectorRef) {}

  public getTemplate(): TemplateRef<HTMLElement> {
    return {
      layout1: this.layout1
    }[this.type];
  }

  ngAfterViewInit(): void {
    this.changeDetectorRef.detectChanges();
  }
}
