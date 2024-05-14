import { fakeApiCall } from "services/helpers"

export default async function Test() {
  const data = await fakeApiCall({ delay: 2000, response: { success: true } })
  return <div>test {data.success}</div>
}
