import qs from 'querystring'

const API_URL = process.env.REACT_NATIVE_API_URL || 'localhost:4000'

export const buildUrl = (path) => API_URL + path

export const buildHeaders = () => ({
  Accept: 'application/json',
  'Content-Type': 'application/json'
})

export async function get(path, params) {
  const queryString = qs.stringify(params)
  return fetch(`${buildUrl(path)}?${queryString}`)
}

export async function post(path, params) {
  return fetch(buildUrl(path), {
    method: 'POST',
    headers: buildHeaders(),
    body: JSON.stringify(params)
  })
}

export async function put(path, params) {
  return fetch(buildUrl(path), {
    method: 'PUT',
    headers: buildHeaders(),
    body: JSON.stringify(params)
  })
}
