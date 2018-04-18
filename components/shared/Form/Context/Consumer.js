import {Component} from 'react'

import {Consumer} from './Context'

export default class ControlledFormConsumer extends Component {
  static defaultProps = {
    validations: []
  }

  static initialState = {
    valid: true,
    errors: []
  }

  state = null

  static getDerivedStateFormProps({validations, value}, state) {
    if (!state || validations.length === 0) return this.initialState
    return validations.reduce(({valid, errors}, fun) => {
      const error = fun(value)
      if (error) return {valid: false, errors: [error].concat(errors)}
      else return {valid, errors}
    }, this.initialState)
  }

  render() {
    const {children} = this.props
    return children(this.state)
  }
}

export const pureField = (Target) => ({name, ...props}) => (
  <Consumer>
    {({value, onChange}) => (
      <Target {...props} onChange={onChange(name)} value={value[name]} />
    )}
  </Consumer>
)

export const field = (options) => (Target) =>
  pureField((props) => (
    <ControlledFormConsumer {...props} {...options}>
      {(validation) => <Target {...validation} {...props} />}
    </ControlledFormConsumer>
  ))
