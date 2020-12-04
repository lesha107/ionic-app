import { AppKeyValueInterface } from "src/app/shared/interfaces/helpers";

export function routesTypeDefinition<T extends AppKeyValueInterface<string>>(types: T): T {
  return types;
}

export const APP_CLIENT_TRANSLATES = routesTypeDefinition({
  EXAMPLES: $localize`Examples`,
  CALENDAR: $localize`Calendar`,
  FORMS: $localize`Forms`,
  SKELETON: $localize`Skeleton`,
  TYPOGRAPHY: $localize`Typography`
});
