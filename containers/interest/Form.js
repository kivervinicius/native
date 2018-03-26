import {Component} from 'react'
import {connect} from 'react-redux'

import {getInterestTypes} from '@/redux/modules/interest/types/selectors'
import {isLoading, getError} from '@/redux/modules/interest/form/selectors'
import {request} from '@/redux/modules/interest/form'
import Form from '@/components/interest/Form'
import Message from '@/components/interest/Message'

class InterestFormApp extends Component {
  state = {
    ok: false
  }

  componentWillReceiveProps(next) {
    if (this.props.loading && !next.loading && !next.error) {
      this.setState({ok: true})
    }
  }

  onSubmit = (params) => {
    const {request, id, loading} = this.props
    if (!loading) request(id, params)
  }

  renderForm() {
    return <Form {...this.props} onSubmit={this.onSubmit} />
  }

  renderMessage() {
    return <Message onDismiss={this.props.onDismiss} />
  }

  render() {
    return this.state.ok ? this.renderMessage() : this.renderForm()
  }
}

const props = (state) => ({
  types: getInterestTypes(state),
  loading: isLoading(state),
  error: getError(state)
})

const actions = {request}

export default connect(props, actions)(InterestFormApp)
