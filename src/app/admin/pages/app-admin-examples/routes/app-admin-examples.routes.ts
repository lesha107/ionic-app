import { generateRoutes } from "src/app/shared/helpers/routes";

const BASE_PATH = "admin/examples";
const BASE_ROUTES = [
  "calendar",
  "forms",
  "skeleton",
  "typography",
  "drag_and_drop",
  "list",
  "dialog",
  "snackbar",
  "table"
];

export const APP_ADMIN_EXAMPLES_ROUTES = generateRoutes(BASE_PATH, BASE_ROUTES);
