import { generateRoutes } from "src/app/shared/helpers/routes";

const BASE_PATH = "admin";
const BASE_ROUTES = ["examples"];

export const APP_ADMIN_ROUTES = generateRoutes(BASE_PATH, BASE_ROUTES);
