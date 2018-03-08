import {createSelector} from 'reselect'

export const getListings = (state) => state.listings.data

export const getListing = createSelector(
  getListings,
  (_, {id}) => id,
  (listings, id) => listings[id] || {}
)
