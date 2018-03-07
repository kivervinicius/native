import {createSelector} from 'reselect'

export const getFeed = (state) => state.listings.feed

export const getPages = createSelector(getFeed, (feed) => feed.pages)

export const getError = createSelector(getFeed, (feed) => feed.error)

export const isLoading = createSelector(getFeed, (feed) => feed.loading)
