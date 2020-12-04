import { AppConfigStateInterface } from "src/app/core/interfaces/store";

export function createInitialState(): AppConfigStateInterface {
  return {
    isLeftSidenavOpened: false,
    isRightSidenavOpened: false
  };
}
