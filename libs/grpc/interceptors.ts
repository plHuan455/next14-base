import { ConnectError, Interceptor } from "@connectrpc/connect"
import { COOKIE_STORAGE } from "@constants/storage"
import { getCookie } from "cookies-next"
import ENVS from "envs"

import { logDebug } from "./helpers"

export const setTokenServer: Interceptor = (next) => async (req) => {
  if (req.header.get("Authorization")) {
    return next(req)
  }
  try {
    const cookieHeader = await import("next/headers").then((module) => module.cookies)
    const token = getCookie(COOKIE_STORAGE.access_token, { cookies: cookieHeader })
    if (token) {
      req.header.set("Authorization", "Bearer " + token)
    }
    return next(req)
  } catch (err) {
    return next(req)
  }
}

export const setTokenClient: Interceptor = (next) => async (req) => {
  if (req.header.get("Authorization")) {
    return next(req)
  }
  const token = getCookie(COOKIE_STORAGE.access_token)
  if (token) {
    req.header.set("Authorization", "Bearer " + token)
  }
  return next(req)
}

export const logger: Interceptor = (next) => async (req) => {
  logDebug(
    `%c[REQUEST] -> [${req.service.typeName} > ${req.method.name}]:`,
    "background-color: #deeb34; color: #000; font-size: 14px",
    req,
  )
  try {
    const res = await next(req)
    logDebug(
      `%c[RESPONSE] -> [${req.service.typeName} > ${req.method.name}]:`,
      "background-color: #23d947; color: #000; font-size: 14px",
      res,
    )
    return res
  } catch (err) {
    const connectErr = ConnectError.from(err)
    logDebug(
      `%c[ERROR] -> [${req.service.typeName}] > ${req.method.name}]: `,
      "background-color: #c0392b; color: #000; font-size: 14px",
      err,
    )
    return Promise.reject(connectErr)
  }
}

export const addTenantId = (next) => async (req) => {
  req.header.set("x-tenant-id", ENVS.TENANT_ID)
  return next(req)
}
