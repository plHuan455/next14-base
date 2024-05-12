export enum MENU_ITEM {
  GAMES = "games",
  PRODUCTS = "products",
  CORE_VALUES = "core_values",
  TEAMS = "teams",
}

export const MENU_DATA = {
  [MENU_ITEM.GAMES]: {
    label: "games",
    href: "/#games",
    id: "games",
  },
  [MENU_ITEM.PRODUCTS]: {
    label: "products",
    href: "/#products",
    id: "products",
  },
  [MENU_ITEM.CORE_VALUES]: {
    label: "core_values",
    href: "/#core",
    id: "core",
  },
  [MENU_ITEM.TEAMS]: {
    label: "teams",
    href: "/#team",
    id: "team",
  },
}

export const CONTACT_US = "contact_us"
