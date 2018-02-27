import qs from 'querystring'

import ResponseError from './ResponseError'

const API_URL = process.env.REACT_NATIVE_API_URL || 'http://localhost:4000'

export const buildUrl = (path) => API_URL + path

export const buildHeaders = () => ({
  Accept: 'application/json',
  'Content-Type': 'application/json'
})

export async function fetch(path, options = {}) {
  const finalOptions = {
    ...options,
    headers: Object.assign(buildHeaders(options.jwt), options.headers || {})
  }
  const response = await window.fetch(buildUrl(path), finalOptions)
  if (Math.floor(response.state / 100) !== 2) {
    let data
    const cType = response.headers.get('Content-Type')
    if (/application\/json/.test(cType))
      try {
        data = await response.json()
      } catch (_) {
        data = undefined
      }
    throw new ResponseError(response, data)
  }
}

export async function get(path, params) {
  const queryString = qs.stringify(params)
  return await fetch(`${path}?${queryString}`)
}

export async function post(path, params) {
  return await fetch(path, {
    method: 'POST',
    headers: buildHeaders(),
    body: JSON.stringify(params)
  })
}

export async function put(path, params) {
  return await fetch(path, {
    method: 'PUT',
    headers: buildHeaders(),
    body: JSON.stringify(params)
  })
}
