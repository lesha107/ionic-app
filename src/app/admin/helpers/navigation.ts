import { APP_ADMIN_TRANSLATES } from "src/app/admin/helpers/i18n";
import { APP_ADMIN_EXAMPLES_ROUTES } from "src/app/admin/pages/app-admin-examples/routes/app-admin-examples.routes";
import { AppNavigationMenuInterface } from "src/app/shared/interfaces/components";

export const APP_ADMIN_NAVIGATION_MENU: AppNavigationMenuInterface = [
  {
    type: "group",
    name: APP_ADMIN_TRANSLATES.EXAMPLES,
    icon: "",
    path: APP_ADMIN_EXAMPLES_ROUTES.BASE.fullPath,
    children: [
      {
        type: "link",
        name: APP_ADMIN_TRANSLATES.CALENDAR,
        icon: "calendar",
        path: APP_ADMIN_EXAMPLES_ROUTES.CALENDAR.fullPath
      },
      {
        type: "link",
        name: APP_ADMIN_TRANSLATES.FORMS,
        icon: "forms",
        path: APP_ADMIN_EXAMPLES_ROUTES.FORMS.fullPath
      },
      {
        type: "link",
        name: APP_ADMIN_TRANSLATES.SKELETON,
        icon: "skeleton",
        path: APP_ADMIN_EXAMPLES_ROUTES.SKELETON.fullPath
      },
      {
        type: "link",
        name: APP_ADMIN_TRANSLATES.TYPOGRAPHY,
        icon: "typography",
        path: APP_ADMIN_EXAMPLES_ROUTES.TYPOGRAPHY.fullPath
      },
      {
        type: "link",
        name: APP_ADMIN_TRANSLATES.DRAG_AND_DROP,
        icon: "drag_and_drop",
        path: APP_ADMIN_EXAMPLES_ROUTES.DRAG_AND_DROP.fullPath
      },
      {
        type: "link",
        name: APP_ADMIN_TRANSLATES.LIST,
        icon: "list",
        path: APP_ADMIN_EXAMPLES_ROUTES.LIST.fullPath
      },
      {
        type: "link",
        name: APP_ADMIN_TRANSLATES.DIALOG,
        icon: "dialog",
        path: APP_ADMIN_EXAMPLES_ROUTES.DIALOG.fullPath
      },
      {
        type: "link",
        name: APP_ADMIN_TRANSLATES.SNACKBAR,
        icon: "snackbar",
        path: APP_ADMIN_EXAMPLES_ROUTES.SNACKBAR.fullPath
      },
      {
        type: "link",
        name: APP_ADMIN_TRANSLATES.TABLE,
        icon: "table",
        path: APP_ADMIN_EXAMPLES_ROUTES.TABLE.fullPath
      }
    ]
  }
];
