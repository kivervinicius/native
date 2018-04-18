import {Component} from 'react'
import {connect} from 'react-redux'

import {getUser, getError, isLoading} from '@/redux/modules/auth/selectors'
import {signIn} from '@/redux/modules/auth'
import Form from '@/components/auth/Login'

class LoginFormApp extends Component {
  onSubmit = (params) => {
    const {signIn, loading} = this.props
    console.log(this.props, params)
    if (!loading) signIn(params)
  }

  render() {
    const {innerRef} = this.props
    return <Form {...this.props} ref={innerRef} onSubmit={this.onSubmit} />
  }
}

const props = (state) => ({
  user: getUser(state),
  loading: isLoading(state),
  error: getError(state)
})

const actions = {signIn}

export default connect(props, actions)(LoginFormApp)
