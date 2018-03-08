import _ from 'lodash'
import update from 'immutability-helper'

import * as feed from '../feed'

export const REQUEST = 'listings/data/REQUEST'

export default function listingsData(state = {}, action) {
  switch (action.type) {
    case feed.SUCCESS:
      return update(state, {
        $merge: _.keyBy(action.data, 'id')
      })
    default:
      return state
  }
}
