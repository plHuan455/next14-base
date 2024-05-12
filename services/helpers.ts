import { Error, StatusCode as grpcStatusCode } from "grpc-web"
import { MutableRefObject } from "react"

import { isProduction } from "lib/utils/nextjs-env"
import { SystemLog } from "lib/utils/system-logs"

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

export const logError = ({ error, method, errorName }: { error: Error; method: string; errorName: string }) => {
  logDebug(
    `%c >>> ERROR: [${method}] ${errorName ? `=> ${errorName}` : ""}`,
    "background-color: #c0392b; color: #000; font-size: 14px",
    error,
  )
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

export const logGrpcError = ({ error, method }: { error: Error; method: string }) => {
  switch (error?.code) {
    case grpcStatusCode.UNAUTHENTICATED:
      logError({ error, method, errorName: "UNAUTHENTICATED" })
      break
    case grpcStatusCode.UNKNOWN:
      logError({ error, method, errorName: "UNKNOWN" })
      break
    case grpcStatusCode.UNIMPLEMENTED:
      logError({ error, method, errorName: "UNIMPLEMENTED" })
      break
    case grpcStatusCode.INVALID_ARGUMENT:
      logError({ error, method, errorName: "INVALID_ARGUMENT" })
      break
    case grpcStatusCode.NOT_FOUND:
      logError({ error, method, errorName: "NOT_FOUND" })
      break
    case grpcStatusCode.CANCELLED:
      logError({ error, method, errorName: "CANCELLED" })
      break
    case grpcStatusCode.DATA_LOSS:
      logError({ error, method, errorName: "DATA_LOSS" })
      break
    case grpcStatusCode.DEADLINE_EXCEEDED:
      logError({ error, method, errorName: "DEADLINE_EXCEEDED" })
      break
    case grpcStatusCode.FAILED_PRECONDITION:
      logError({ error, method, errorName: "FAILED_PRECONDITION" })
      break
    case grpcStatusCode.INTERNAL:
      logError({ error, method, errorName: "INTERNAL" })
      break
    case grpcStatusCode.PERMISSION_DENIED:
      logError({ error, method, errorName: "PERMISSION_DENIED" })
      break
    case grpcStatusCode.RESOURCE_EXHAUSTED:
      logError({ error, method, errorName: "RESOURCE_EXHAUSTED" })
      break
    case grpcStatusCode.UNAVAILABLE:
      logError({ error, method, errorName: "UNAVAILABLE" })
      break
    case grpcStatusCode.OUT_OF_RANGE:
      logError({ error, method, errorName: "OUT_OF_RANGE" })
      break
    default:
      logError({ error, method, errorName: "ERROR" })
      break
  }
}

export const timeoutSleep = ({
  sleep,
  ref,
  onFinish,
}: {
  sleep: number
  ref: MutableRefObject<NodeJS.Timeout>
  onFinish?(): void
}) => {
  return new Promise((_resolve, reject) => {
    ref.current = setTimeout(() => {
      onFinish?.()
      reject("Request timeout.")
    }, sleep)
  })
}

export function convertBigIntToNumber(data: unknown) {
  if (typeof data === "bigint") {
    return Number(data)
  }

  if (Array.isArray(data)) {
    return data.map((item) => convertBigIntToNumber(item))
  }

  if (typeof data === "object" && data !== null) {
    return Object.keys(data).reduce((acc, curKey) => {
      return {
        ...acc,
        [curKey]: convertBigIntToNumber(data[curKey]),
      }
    }, {})
  }

  return data
}
