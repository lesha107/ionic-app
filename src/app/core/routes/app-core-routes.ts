import { routesTypeDefinition } from "src/app/shared/helpers/routes";

const BASE_PATH = "";

export const APP_CORE_ROUTES = routesTypeDefinition({
  AUTH: {
    path: "auth",
    fullPath: `${BASE_PATH}/auth`
  },
  ADMIN: {
    path: "admin",
    fullPath: `${BASE_PATH}/admin`
  },
  CLIENT: {
    path: "client",
    fullPath: `${BASE_PATH}/client`
  }
});
