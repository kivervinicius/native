import _ from 'lodash'
import {PureComponent} from 'react'

import {Consumer} from './Context'

const initialState = {
  valid: true,
  errors: []
}

export default class ControlledFormConsumer extends PureComponent {
  static defaultProps = {
    validations: []
  }

  state = initialState

  validate = (value) => {
    const {validations} = this.props
    if (validations.length === 0) return initialState
    return validations.reduce(({valid, errors}, fun) => {
      const error = fun(value)
      if (error) return {valid: false, errors: [error].concat(errors)}
      else return {valid, errors}
    }, initialState)
  }

  onValidate = (value) => {
    const state = this.validate(value)
    this.setState(state)
    this.props.onValidate(state.valid, state.errors)
    return state.valid
  }

  render() {
    const {children} = this.props
    return children({...this.state, onBlur: this.onValidate})
  }
}

export const pureField = (Target) => ({name, ...props}) => (
  <Consumer>
    {({value, onChange, onValidate}) => (
      <Target
        {...props}
        onChange={onChange(name)}
        onValidate={onValidate(name)}
        value={value[name]}
      />
    )}
  </Consumer>
)

export const field = (options) => (Target) =>
  pureField((props) => (
    <ControlledFormConsumer {...props} {...options}>
      {(ctx) => <Target {...ctx} {...props} />}
    </ControlledFormConsumer>
  ))
