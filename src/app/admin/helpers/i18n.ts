export function routesTypeDefinition<T extends { [key: string]: string }>(types: T): T {
  return types;
}

export const APP_ADMIN_TRANSLATES = routesTypeDefinition({
  EXAMPLES: $localize`Examples`,
  CALENDAR: $localize`Calendar`,
  FORMS: $localize`Forms`,
  SKELETON: $localize`Skeleton`,
  TYPOGRAPHY: $localize`Typography`,
  DRAG_AND_DROP: $localize`Drag And Drop`,
  LIST: $localize`List`,
  DIALOG: $localize`Dialog`,
  SNACKBAR: $localize`Snackbar`,
  TABLE: $localize`Table`
});
