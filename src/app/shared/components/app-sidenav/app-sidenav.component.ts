import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  TemplateRef,
  ViewChild
} from "@angular/core";
import { APP_SIDENAV_ANIMATIONS } from "src/app/shared/components/app-sidenav/animations";
import { AppNavigationMenuInterface } from "src/app/shared/interfaces/components";

@Component({
  selector: "app-sidenav",
  templateUrl: "./app-sidenav.component.html",
  styleUrls: ["./app-sidenav.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: APP_SIDENAV_ANIMATIONS
})
export class AppSidenavComponent implements AfterViewInit {
  @Input() items: any[];

  @ViewChild("dividerTemplate") dividerTemplate: TemplateRef<HTMLElement>;
  @ViewChild("subheaderTemplate") subheaderTemplate: TemplateRef<HTMLElement>;
  @ViewChild("groupTemplate") groupTemplate: TemplateRef<HTMLElement>;
  @ViewChild("linkTemplate") linkTemplate: TemplateRef<HTMLElement>;

  @Input() public readonly navigationMenu: AppNavigationMenuInterface;
  @Input() public readonly showFullNav: boolean;
  @Input() public readonly user: any;

  constructor(private readonly changeDetectorRef: ChangeDetectorRef) {
    this.showFullNav = true;
  }

  public getTemplate(type: "link" | "subheader" | "group" | "divider"): TemplateRef<HTMLElement> {
    const templates = {
      link: this.linkTemplate,
      subheader: this.subheaderTemplate,
      group: this.groupTemplate,
      divider: this.dividerTemplate
    };

    return templates[type];
  }

  ngAfterViewInit(): void {
    this.changeDetectorRef.detectChanges();
  }
}
