// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function SystemLog(fn: "log" | "debug" | "info" | "error", ...params: any) {
  // eslint-disable-next-line no-console
  console[fn](...params)
}
