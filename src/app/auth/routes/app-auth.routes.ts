import { routesTypeDefinition } from "src/app/shared/helpers/routes";

const BASE_PATH = "/auth";

export const APP_AUTH_ROUTES = routesTypeDefinition({
  BASE: {
    path: "",
    fullPath: BASE_PATH
  },
  SIGN_IN: {
    path: "sign_in",
    fullPath: `${BASE_PATH}/sign_in`
  },
  SIGN_UP: {
    path: "sign_up",
    fullPath: `${BASE_PATH}/sign_up`
  },
  RESET_PASSWORD: {
    path: "reset_password",
    fullPath: `${BASE_PATH}/reset_password`
  }
});
