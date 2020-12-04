import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatBadgeModule } from "@angular/material/badge";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { MatDividerModule } from "@angular/material/divider";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { RouterModule } from "@angular/router";
import { AvatarModule } from "ngx-avatar";
import { NgxDropzoneModule } from "ngx-dropzone";
import { NgxSkeletonLoaderModule } from "ngx-skeleton-loader";
import { APP_SHARED_COMPONENTS } from "src/app/shared/components";
import { APP_SHARED_LAYOUTS } from "src/app/shared/layouts";

const APP_SHARED_DECLARATIONS = [...APP_SHARED_COMPONENTS, ...APP_SHARED_LAYOUTS];
const APP_SHARED_IMPORTS = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule,
  AvatarModule,
  HttpClientModule,
  NgxSkeletonLoaderModule,
  NgxDropzoneModule,
  FlexLayoutModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatDialogModule,
  MatSidenavModule,
  MatDividerModule,
  MatMenuModule,
  MatListModule,
  MatExpansionModule,
  MatBadgeModule,
  MatButtonModule
];
const APP_SHARED_EXPORTS = [...APP_SHARED_DECLARATIONS];

@NgModule({
  declarations: APP_SHARED_DECLARATIONS,
  imports: APP_SHARED_IMPORTS,
  exports: APP_SHARED_EXPORTS
})
export class AppSharedModule {}
