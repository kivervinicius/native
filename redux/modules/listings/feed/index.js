import _ from 'lodash'
import update from 'immutability-helper'

export const REQUEST = 'listings/feed/REQUEST'
export const LOADING = 'listings/feed/LOADING'
export const SUCCESS = 'listings/feed/SUCCESS'
export const FAILURE = 'listings/feed/FAILURE'

export const request = (key, options = {}) => ({type: REQUEST, key, options})
export const loading = (key, options) => ({type: LOADING, key, options})
export const success = (key, data, pagination) => ({
  type: SUCCESS,
  key,
  data,
  pagination
})
export const failure = (key, error) => ({type: FAILURE, key, error})

function listingsFeed(state = {}, action) {
  switch (action.type) {
    case LOADING:
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
  options: null,
  loading: false,
  error: null,
  pagination: {
    currentPage: 0
  },
  pages: {}
}

listingsFeed.node = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return update(state, {
        $merge: {
          loading: true,
          error: null
        }
      })
    case SUCCESS:
      return update(state, {
        $merge: {
          loading: false,
          pagination: action.pagination
        },
        pages: {
          [action.pagination.currentPage]: {
            $set: _.map(action.data, 'id')
          }
        }
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
