import { ServiceType } from "@bufbuild/protobuf"
import { PromiseClient, createPromiseClient } from "@connectrpc/connect"
import { createGrpcWebTransport as createGrpcNodeTransport } from "@connectrpc/connect-node"
import { createGrpcWebTransport } from "@connectrpc/connect-web"
import { isLocal, isServer } from "@libs/utils/nextjs"
import ENVS from "envs"

import { addTenantId, logger, setTokenClient, setTokenServer } from "./interceptors"

export const transport = isServer()
  ? createGrpcNodeTransport({
      baseUrl: !process.env.NEXT_PHASE && !isLocal() ? "http://gate:8888" : ENVS.GRPC_SERVER,
      httpVersion: "1.1",
      interceptors: [addTenantId, setTokenServer],
    })
  : createGrpcWebTransport({
      baseUrl: ENVS.GRPC_SERVER,
      interceptors: [addTenantId, setTokenClient, logger],
    })

export function createGrpcClient<T extends ServiceType>(service: T): PromiseClient<T> {
  return createPromiseClient(service, transport)
}
