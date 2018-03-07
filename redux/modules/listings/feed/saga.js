import _ from 'lodash'
import {put, fork, call, select, all, takeLatest} from 'redux-saga'

import * as api from '@/lib/services/listings'
import {getFeed} from './selectors'
import * as actions from './index'

const pagination = (res) => ({
  currentPage: res.page_number || 0,
  pageSize: res.page_size,
  totalPages: res.total_pages,
  totalEntries: res.total_entries
})

function* load({key, options}) {
  yield put(actions.loading(key, options))
  try {
    const response = yield call(api[key], options)
    yield put(actions.success(response.listings, pagination(response)))
  } catch (err) {
    yield put(actions.failure(err))
  }
}

function* request({key, options}) {
  const state = yield select(getFeed)
  if (state.key !== key && !_.isEqual(state.options, options))
    yield fork(load, {key, options})
}

export default function* listingsFeedSaga() {
  yield all([takeLatest(actions.REQUEST, request)])
}
