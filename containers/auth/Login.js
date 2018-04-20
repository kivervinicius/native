import {Component} from 'react'
import {connect} from 'react-redux'

import {getUser, getError, isLoading} from '@/redux/modules/auth/selectors'
import {signIn, reset} from '@/redux/modules/auth'
import Form from '@/components/auth/Login'

class LoginFormApp extends Component {
  componentDidMount() {
    this.props.reset()
  }

  componentDidUpdate() {
    const {user, onSuccess} = this.props
    if (user && onSuccess) onSuccess()
  }

  onSubmit = (params) => {
    const {signIn, loading} = this.props
    if (!loading) signIn(params)
  }

  render() {
    return <Form {...this.props} onSubmit={this.onSubmit} />
  }
}

const props = (state) => ({
  user: getUser(state),
  loading: isLoading(state),
  error: getError(state)
})

const actions = {signIn, reset}

export default connect(props, actions)(LoginFormApp)
