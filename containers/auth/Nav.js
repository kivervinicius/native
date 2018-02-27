import {connect} from 'react-redux'

import {getUser} from '@/redux/modules/auth/selectors'
import Nav from '@/components/auth/Nav'

const props = (state) => ({
  user: getUser(state)
})

export default connect(props)(Nav)
