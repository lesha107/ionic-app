import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatDialogModule } from "@angular/material/dialog";
import { BrowserModule } from "@angular/platform-browser";
import { NG_ENTITY_SERVICE_CONFIG } from "@datorama/akita-ng-entity-service";
import { AkitaNgRouterStoreModule } from "@datorama/akita-ng-router-store";
import { AkitaNgDevtools } from "@datorama/akita-ngdevtools";
import { HotkeysModule } from "@ngneat/hotkeys";
import { CalendarModule } from "angular-calendar";
import { NgxMaskModule } from "ngx-mask";
import { APP_CALENDAR_CONFIG, APP_MASK_CONFIG, APP_SERVER_CONFIG } from "src/app/core/configs";
import { AppCoreComponent } from "src/app/core/container/app-core.component";
import { AppCoreRoutingModule } from "src/app/core/routes/app-core-routing.module";
import { environment } from "src/environments/environment";
import { RouteReuseStrategy } from "@angular/router";
import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

const APP_CORE_DECLARATIONS = [AppCoreComponent];
const APP_CORE_IMPORTS = [
  CommonModule,
  BrowserModule.withServerTransition(APP_SERVER_CONFIG),
  IonicModule.forRoot(),
  HotkeysModule,
  CalendarModule.forRoot(APP_CALENDAR_CONFIG),
  NgxMaskModule.forRoot(APP_MASK_CONFIG),
  AppCoreRoutingModule,
  MatDialogModule,
  AkitaNgRouterStoreModule,
  environment.production ? [] : AkitaNgDevtools.forRoot()
];
const APP_CORE_EXPORTS = [AppCoreComponent];
const APP_CORE_PROVIDERS = [
  StatusBar,
  SplashScreen,
  { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  {
    provide: NG_ENTITY_SERVICE_CONFIG,
    useValue: { baseUrl: "https://jsonplaceholder.typicode.com" }
  }
];

@NgModule({
  declarations: APP_CORE_DECLARATIONS,
  imports: APP_CORE_IMPORTS,
  exports: APP_CORE_EXPORTS,
  providers: APP_CORE_PROVIDERS
})
export class AppCoreModule {}
