import { DateAdapter } from "angular-calendar";
import { adapterFactory } from "angular-calendar/date-adapters/moment";

export const APP_CALENDAR_CONFIG = {
  provide: DateAdapter,
  useFactory: adapterFactory
};
