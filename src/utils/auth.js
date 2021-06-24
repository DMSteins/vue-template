const TOKENKEY = 'access_token'

export function getToken() {
  return localStorage.getItem(TOKENKEY)
}

export function setToken(val) {
  localStorage.setItem(TOKENKEY, val)
}

export function removeToken() {
  localStorage.removeItem(TOKENKEY)
}

