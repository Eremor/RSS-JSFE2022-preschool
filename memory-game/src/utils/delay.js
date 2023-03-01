export const delay = (timeout) => {
  return new Promise((res, rej) => {
    setTimeout(res, timeout);
  })
}