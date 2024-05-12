import dayjs, { Dayjs } from "dayjs"
import "dayjs/locale/vi"
import relativeTime from "dayjs/plugin/relativeTime"

dayjs.extend(relativeTime)

export const formatCreateTime = (seconds: number) => {
  const date = new Date()
  let dif = Number(((date.getTime() - seconds * 1000) / 1000).toFixed(0))
  if (dif < 60) {
    return `Vài giây trước`
  } else if (dif >= 60 && dif < 60 * 60) {
    dif = Number((dif / 60).toFixed(0))
    return `${dif} phút trước`
  } else if (dif >= 60 * 60 && dif < 60 * 60 * 24) {
    dif = Number((dif / 60 / 60).toFixed(0))
    return `${dif} giờ trước`
  } else if (dif >= 60 * 60 * 24 && dif < 60 * 60 * 24 * 2) {
    dif = Number((dif / 60 / 60 / 24).toFixed(0))
    return `${dif} ngày trước`
  }
  return dayjs(seconds * 1000).format("DD/MM/YYYY")
}

export function formatISO8601(date: Date | number) {
  return dayjs(date).isValid() ? dayjs(date).toISOString() : ""
}

export function dayjsToSecBigint(day: Dayjs) {
  return BigInt(Math.floor(day.toDate().getTime() / 1000))
}

export function secBigintToDayjs(seconds: bigint) {
  return dayjs(Number(seconds) * 1000)
}
