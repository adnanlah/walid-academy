// mock login and logout
export function login() {
  // add cookie
  if (process.browser) {
    document.cookie = 'swr-test-token=swr;'
  }
}
export function logout() {
  // delete cookie
  if (process.browser) {
    document.cookie = 'swr-test-token=; expires=Thu, 01 Jan 1970 00:00:01 GMT;'
  }
}
