import {connect} from 'react-redux'

import {signOut} from '@/redux/modules/auth'
import {getUser} from '@/redux/modules/auth/selectors'
import Nav from '@/components/auth/Nav'

const props = (state) => ({
  user: getUser(state)
})

const actions = {
  onLogout: signOut
}

export default connect(props, actions)(Nav)
