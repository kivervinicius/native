import {get, post} from '../api'

export async function create(id, params) {
  return post(`/listings/${id}/interests`, {
    interest: params
  })
}

create.params = ({type, ...params}) => ({
  interest_type_id: type,
  ...params
})

export async function types() {
  return get('/interest_types')
}
