import { AppRoutesInterface } from "src/app/shared/interfaces/routes";

export function routesTypeDefinition<T extends AppRoutesInterface>(types: T): T {
  return types;
}

export function generateRoutes(base: string, routes?: string[]): AppRoutesInterface {
  const BASE_ROUTE: AppRoutesInterface = {
    BASE: {
      path: "",
      fullPath: `${base}/`
    }
  };

  function generateRoute(previousValue: AppRoutesInterface, currentValue: string): AppRoutesInterface {
    return {
      ...previousValue,
      [currentValue.toUpperCase()]: {
        path: currentValue,
        fullPath: `/${base}/${currentValue}`
      }
    };
  }

  return routes.reduce(generateRoute, BASE_ROUTE);
}
