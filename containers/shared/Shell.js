import {connect} from 'react-redux'
import withNavigation from 'react-navigation/src/views/withNavigation'

import {signOut} from '@/redux/modules/auth'
import {getUser} from '@/redux/modules/auth/selectors'
import Shell from '@/components/shared/Shell'

const props = (state) => ({
  user: getUser(state)
})

const actions = {
  onLogout: signOut
}

export default withNavigation(connect(props, actions)(Shell))
