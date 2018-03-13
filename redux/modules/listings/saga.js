import {all, fork} from 'redux-saga/effects'

import data from './data/saga'
import feed from './feed/saga'

export default function* listingsSaga() {
  yield all([fork(data), fork(feed)])
}
