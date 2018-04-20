import {PureComponent} from 'react'
import {connect} from 'react-redux'

import {getData, getError, isLoading} from '@/redux/modules/auth/selectors'
import {resetPassword, reset} from '@/redux/modules/auth'
import Form from '@/components/auth/ResetPassword'

class ResetPasswordFormApp extends PureComponent {
  componentDidMount() {
    this.props.reset()
  }

  componentWillUnmount() {
    this.props.reset()
  }

  componentDidUpdate(prev) {
    const {onSuccess, loading, data, error} = this.props
    const finishedLoading = prev.loading && !loading
    const success = !error && data
    if (finishedLoading && success && onSuccess) onSuccess(data)
  }

  onSubmit = (params) => {
    const {resetPassword, loading} = this.props
    if (!loading) resetPassword(params)
  }

  render() {
    return <Form {...this.props} onSubmit={this.onSubmit} />
  }
}

const props = (state) => ({
  data: getData(state),
  loading: isLoading(state),
  error: getError(state)
})

const actions = {resetPassword, reset}

export default connect(props, actions)(ResetPasswordFormApp)
