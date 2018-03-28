import {createSelector} from 'reselect'

export const getRelationships = (state) => state.listings.relationships

export const getRelatedListings = createSelector(
  getRelationships,
  (_, {id}) => id,
  (listings, id) => listings[id] || []
)
