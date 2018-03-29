import {connect} from 'react-redux'
import withNavigation from 'react-navigation/src/views/withNavigation'

import {getUser} from '@/redux/modules/auth/selectors'
import Shell, {Section} from '@/components/shared/Shell'

const props = (state) => ({
  user: getUser(state)
})

export default withNavigation(connect(props)(Shell))

export {Section}
