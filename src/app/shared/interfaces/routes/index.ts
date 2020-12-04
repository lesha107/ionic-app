import { AppKeyValueInterface } from "src/app/shared/interfaces/helpers";

export interface AppRouteInterface {
  path: string;
  fullPath: string;
}

export type AppRoutesInterface = AppKeyValueInterface<AppRouteInterface>;
