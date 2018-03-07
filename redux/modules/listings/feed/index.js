import _ from 'lodash'
import update from 'immutability-helper'

export const REQUEST = 'listings/feed/REQUEST'
export const LOADING = 'listings/feed/LOADING'
export const SUCCESS = 'listings/feed/SUCCESS'
export const FAILURE = 'listings/feed/FAILURE'

export const request = (key, options = {}) => ({type: REQUEST, key, options})
export const loading = (key, options) => ({type: LOADING, key, options})
export const success = (data, pagination) => ({type: SUCCESS, data, pagination})
export const failure = (error) => ({type: FAILURE, error})

const initialState = {
  type: null,
  options: null,
  loading: false,
  error: null,
  pagination: {
    currentPage: 0
  },
  pages: {}
}

export default function listingsFeed(state = initialState, action) {
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
          [action.pagination.currentPage]: {$set: _.map(action.data, 'id')}
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
