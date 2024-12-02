import ENVS from "envs"

export function addDomain(path: string) {
  const pathname = path.replace(/^\//g, "")
  return `${ENVS.DOMAIN}${pathname ? `/${pathname}` : ""}`
}

export function getPageParams(p: string | number | undefined) {
  const page = Number(p)
  const pageIndex = isNaN(page) || !page ? 0 : page - 1
  return { pageIndex }
}
