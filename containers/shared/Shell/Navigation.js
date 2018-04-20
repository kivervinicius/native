import withNavigation from 'react-navigation/src/views/withNavigation'
import {connect} from 'react-redux'

import {signOut} from '@/redux/modules/auth'
import {getUser} from '@/redux/modules/auth/selectors'
import Navigation from '@/components/shared/Shell/Navigation'

const props = (state) => ({
  user: getUser(state)
})

const actions = {
  onLogout: signOut
}

export default withNavigation(connect(props, actions)(Navigation))
