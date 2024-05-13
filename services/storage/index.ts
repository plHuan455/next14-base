import { jsonParse } from "lib/utils/common"

import { STORAGE_TOKEN_NAME } from "./constants"

class Storage {
  getToken() {
    return jsonParse(localStorage.getItem(STORAGE_TOKEN_NAME))
  }
  clearAll() {
    localStorage.clear()
  }
}

const storage = new Storage()
export default storage
