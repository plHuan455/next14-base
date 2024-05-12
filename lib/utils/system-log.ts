/* eslint-disable */
import { isProduction } from "./nextjs-env"

function SystemLog(fn: "log" | "debug" | "info" | "error", ...params: any) {
  console[fn](...params)
}

export const logDebug = (...params) => {
  if (!isProduction()) {
    SystemLog("debug", ...params)
  }
}

export const logInfo = (...params) => {
  if (!isProduction()) {
    SystemLog("info", ...params)
  }
}

export const logError = (...params) => {
  if (!isProduction()) {
    SystemLog("error", ...params)
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const logRequest = ({ params, method }: { params: any; method: string }) => {
  logDebug(
    `%c >>> REQUEST: [${method}]`,
    "background-color: #deeb34; color: #000; font-size: 14px",
    params ? params.toObject() : null,
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const logResponse = ({ response, method }: { response: any; method: string }) => {
  logDebug(
    `%c >>> RESPONSE: [${method}]`,
    "background-color: #23d947; color: #000; font-size: 14px",
    response ? response.toObject() : null,
  )
}
