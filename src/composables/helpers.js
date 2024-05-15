/**
 * Hard delay for x seconds
 *
 * @param seconds
 * @returns {Promise<unknown>}
 */
export const useSleep = (seconds) => {
  return new Promise((res) => {
    setTimeout(() => {
      res(true)
    }, seconds * 1000)
  })
}
