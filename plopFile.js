// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require("fs")

const FILE_PATHS = {
  vi: "content/vi.json",
  en: "content/en.json",
}

const updateFileValue = (path, { key, value }) => {
  const fileData = JSON.parse(fs.readFileSync(path, "utf-8"))
  const properties = key.split(".")

  properties.reduce((curr, propertyKey, index) => {
    const formatPropertyKey = propertyKey.trim().replace(/\s+/g, "_")
    if (index === properties.length - 1) {
      curr[formatPropertyKey] = value
      return curr[formatPropertyKey]
    } else {
      if (curr[formatPropertyKey] === undefined) {
        curr[formatPropertyKey] = {}
      }

      return curr[formatPropertyKey]
    }
  }, fileData)

  fs.writeFileSync(path, JSON.stringify(fileData, null, 2))
}

module.exports = function (plop) {
  plop.setGenerator("modify-vi-en-lang", {
    description: "UPDATE vi & en language",
    prompts: [
      {
        type: "input",
        name: "key", // key | key1.key2
        message: "key",
      },
      {
        type: "input",
        name: "enValue",
        message: "EN Value",
      },
      {
        type: "input",
        name: "viValue",
        message: "Vi Value",
      },
    ],
    actions: [
      function (data) {
        const { key, viValue, enValue } = data
        updateFileValue(FILE_PATHS.vi, { key: key, value: viValue })
        updateFileValue(FILE_PATHS.en, { key: key, value: enValue })
        return "VI DEV LANGUAGE FILES HAS BEEN UPDATED!"
      },
    ],
  })
}
