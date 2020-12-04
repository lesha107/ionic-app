interface AppNavigationItemBaseInterface {
  name: string;
  icon: string;
  path: string;
  children?: AppNavigationMenuInterface;
}

export type AppNavigationMenuInterface = AppNavigationItemInterface[];

type AppNavigationGroupInterface = {
  type: "group";
} & Required<AppNavigationItemBaseInterface>;

type AppNavigationLinkOrDividerInterface = {
  type: "link" | "divider";
} & AppNavigationItemBaseInterface;

export type AppNavigationItemInterface = AppNavigationGroupInterface | AppNavigationLinkOrDividerInterface;

export type AppSidenavMode = "side" | "push" | "over";
