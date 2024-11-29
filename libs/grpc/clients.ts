import { Article } from "@media/blog-connect/blog_connect"
import { MyID } from "@media/myid-connect/myid_connect"
import { Feapp } from "@tapps/beapp-connect/beapp_connect"

import { createGrpcClient } from "./configs"

export const myIDClient = createGrpcClient(MyID)
export const beAppClient = createGrpcClient(Feapp)
export const blogClient = createGrpcClient(Article)
