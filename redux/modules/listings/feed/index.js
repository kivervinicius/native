import _ from 'lodash'
import update from 'immutability-helper'

export const RESET = 'listings/feed/RESET'
export const LOAD = 'listings/feed/LOAD'
export const REQUEST = 'listings/feed/REQUEST'
export const SUCCESS = 'listings/feed/SUCCESS'
export const FAILURE = 'listings/feed/FAILURE'

export const reset = (key) => ({type: RESET, key})
export const load = (key, options) => ({type: LOAD, key, options})
export const request = (key, options = {}) => ({type: REQUEST, key, options})
export const success = (key, data, pagination) => ({
  type: SUCCESS,
  key,
  data,
  pagination
})
export const failure = (key, error) => ({type: FAILURE, key, error})

function listingsFeed(state = {}, action) {
  switch (action.type) {
    case RESET:
    case REQUEST:
    case SUCCESS:
    case FAILURE:
      return update(state, {
        [action.key]: {$set: listingsFeed.node(state[action.key], action)}
      })
    default:
      return state
  }
}

const initialState = {
  loading: false,
  error: null,
  options: undefined,
  pagination: {},
  pages: []
}

listingsFeed.node = (state = initialState, action) => {
  switch (action.type) {
    case RESET:
      return initialState
    case REQUEST:
      return update(state, {
        $merge: {
          options: action.options,
          loading: true,
          error: null
        }
      })
    case SUCCESS:
      return update(state, {
        $merge: {
          loading: false,
          error: undefined,
          pagination: action.pagination
        },
        pages: {$push: _.map(action.data, 'id')}
      })
    case FAILURE:
      return update(state, {
        $merge: {
          loading: false,
          error: action.error
        }
      })
    default:
      return state
  }
}

export default listingsFeed
