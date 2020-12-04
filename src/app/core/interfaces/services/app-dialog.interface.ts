import { MatDialogConfig } from "@angular/material/dialog";
import { Observable } from "rxjs";

export interface AppDialogServiceOpenArgsInterface {
  component: any;
  fullSize?: boolean;
  data?: any;
  config?: MatDialogConfig;
}

export type AppDialogServiceOpenResponseInterface = Observable<any>;
