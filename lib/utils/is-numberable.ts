export const isNumberable = <T>(value?: T) => {
  if (typeof value === "number") {
    return true
  }
  if (typeof value === "string") {
    return !isNaN(parseFloat(value))
  }
  return false
}
