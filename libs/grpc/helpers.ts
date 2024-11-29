import { isProduction } from "@libs/utils/nextjs"

export function logDebug(...params) {
  if (!isProduction() || (typeof localStorage !== "undefined" && localStorage.getItem("log") === "true")) {
    // eslint-disable-next-line no-console
    console.debug(...params)
  }
}
