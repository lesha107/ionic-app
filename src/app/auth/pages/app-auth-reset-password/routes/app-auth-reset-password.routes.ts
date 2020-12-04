import { routesTypeDefinition } from "src/app/shared/helpers/routes";

const BASE_PATH = "/auth";

export const APP_AUTH_RESET_PASSWORD_ROUTES = routesTypeDefinition({
  BASE: {
    path: "",
    fullPath: `${BASE_PATH}/reset-password`
  }
});
