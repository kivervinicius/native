import {all, fork} from 'redux-saga/effects'

import feed from './feed/saga'

export default function* listingsSaga() {
  yield all([fork(feed)])
}
