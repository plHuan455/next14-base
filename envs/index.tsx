const ENVS = {
  APP_ENV: process.env.NEXT_PUBLIC_APP_ENV,
  DOMAIN: process.env.NEXT_PUBLIC_DOMAIN,
  RESIZE_IMAGE: process.env.NEXT_PUBLIC_RESIZE_IMAGE, // NEXTJS | CLOUDFLARE | NONE
  MEDIA_BASE: process.env.NEXT_PUBLIC_MEDIA_BASE,
  GRPC_SERVER: process.env.NEXT_PUBLIC_GRPC_SERVER as string,
  USE_INTERNAL_DOMAIN: process.env.NEXT_PUBLIC_USE_INTERNAL_DOMAIN,
  GG_TAG: process.env.NEXT_PUBLIC_GOOGLE_TAG_KEY,
}

export default ENVS
