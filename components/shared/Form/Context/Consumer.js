import {Component} from 'react'

export const pureField = (Target) => ({name, ...props}) => (
  <Consumer>
    {({value, onChange}) => (
      <Target {...props} onChange={onChange(name)} value={value[name]} />
    )}
  </Consumer>
)

@pureField
export default class ControlledFieldConsumer extends Component {
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

export const field = (options) => (Target) => (props) => (
  <ControlledFieldConsumer {...props} {...options}>
    {(validation) => <Target {...validation} {...props} />}
  </ControlledFieldConsumer>
)
