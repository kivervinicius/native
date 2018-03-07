import {all, fork} from 'redux-saga'

import feed from './feed/saga'

export default function* root() {
  yield all([fork(feed)])
}
