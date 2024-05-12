import { v4 as uuidv4 } from "uuid"

export const generateUUIDV4 = () => {
  return uuidv4({ msecs: Date.now() })
}
