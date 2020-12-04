import { APP_CLIENT_TRANSLATES } from "src/app/client/i18n";
import { AppNavigationMenuInterface } from "src/app/shared/interfaces/components";

export const APP_CLIENT_NAVIGATION_MENU: AppNavigationMenuInterface = [
  {
    type: "group",
    name: APP_CLIENT_TRANSLATES.EXAMPLES,
    path: "examples",
    icon: "examples",
    children: [
      {
        type: "link",
        name: APP_CLIENT_TRANSLATES.CALENDAR,
        icon: "calendar",
        path: "examples/calendar"
      },
      {
        type: "link",
        name: APP_CLIENT_TRANSLATES.FORMS,
        icon: "forms",
        path: "examples/forms"
      },
      {
        type: "link",
        name: APP_CLIENT_TRANSLATES.SKELETON,
        icon: "skeleton",
        path: "examples/skeleton"
      }
    ]
  }
];
