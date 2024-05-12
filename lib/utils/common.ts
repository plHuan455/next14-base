export const convertSecondsToHHMMSS = (seconds: number) => {
  const preFixSeconds = seconds < 0 ? 0 : seconds
  const hours = Math.floor(preFixSeconds / 3600)
  const minutes = Math.floor((preFixSeconds % 3600) / 60)
  const remainingSeconds = Math.floor(preFixSeconds % 60)
  return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${remainingSeconds
    .toString()
    .padStart(2, "0")}`
}

export const removeUnJsonData = <T>(data: T): T => {
  return JSON.parse(JSON.stringify(data))
}

export const jsonParse = (data: string) => {
  try {
    return JSON.parse(data)
  } catch (err) {
    return null
  }
}

export const copyClipboard = (data: string) => {
  navigator.clipboard.writeText(data)
}
