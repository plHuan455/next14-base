import { ConnectError } from "@connectrpc/connect"
import { Error, StatusCode as grpcStatusCode } from "grpc-web"

import { logDebug } from "./system-log"

const logError = ({
  error,
  method,
  errorName,
}: {
  error: { code: number; message: string }
  method: string
  errorName: string
}) => {
  logDebug(
    `%c >>> ERROR: [${method}] ${errorName ? `=> ${errorName}` : ""}`,
    "background-color: #c0392b; color: #000; font-size: 14px",
    error,
  )
}

export const handleGrpcError = ({ error, method }: { error: Error; method: string }) => {
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

export const getGrpcStatusCode = (error: ConnectError) => {
  return Number(error?.message.match(/(?<=grpc-status:\s)\d+/)?.at(0))
}
