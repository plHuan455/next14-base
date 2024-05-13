import { getActors } from "services/api/video"

export default async function ViewHome() {
  const data = await getActors()
  return <div>{JSON.stringify(data)}</div>
}
