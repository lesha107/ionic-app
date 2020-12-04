import { routesTypeDefinition } from "src/app/shared/helpers/routes";

const BASE_PATH = "/auth";

export const APP_AUTH_SIGN_IN_ROUTES = routesTypeDefinition({
  BASE: {
    path: "",
    fullPath: `${BASE_PATH}/sign_in`
  }
});
