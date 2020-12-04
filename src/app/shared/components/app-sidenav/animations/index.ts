import { transition, trigger, useAnimation } from "@angular/animations";
import { slideInLeft, slideOutLeft } from "ng-animate";

export const APP_SIDENAV_ANIMATIONS = [
  trigger("fade", [
    transition(":enter", useAnimation(slideInLeft, { params: { timing: 0.2 } })),
    transition(":leave", useAnimation(slideOutLeft, { params: { timing: 0.2 } }))
  ])
];
