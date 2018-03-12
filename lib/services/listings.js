import _ from 'lodash/fp'
import {get} from '../api'

export async function featured() {
  return get('/featured_listings')
}

export async function search(params) {
  return get('/listings', search.params(params))
}

search.params = _.flow(
  _.reduce.convert({cap: false})((result, value, key) => {
    switch (key) {
      case 'price':
      case 'area':
      case 'rooms':
        return {...result, ..._.mapKeys((k) => `${k}_${key}`)(value)}
      default:
        return {...result, [key]: value}
    }
  }, {}),
  _.omitBy(_.isNil),
  _.mapKeys(_.snakeCase)
)
