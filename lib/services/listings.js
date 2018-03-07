import {get} from '../api'

export async function featured() {
  return get('/featured_listings')
}
