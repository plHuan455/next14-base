export const runImmediate = <T>(callback: () => T) => {
  return callback()
}
