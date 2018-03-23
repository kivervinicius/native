import {get, post} from '../api'

export async function create(id, params) {
  return post(`/listings/${id}/interests`, {
    interest: params
  })
}

export async function types() {
  return get('/interest_types')
}
