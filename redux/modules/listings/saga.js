import {all, fork} from 'redux-saga'

import feed from './feed/saga'

export default function* listingsSaga() {
  yield all([fork(feed)])
}
