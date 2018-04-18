import {Component} from 'react'

export default class FieldValidator extends Component {
  state = null

  static getDerivedStateFormProps({validate, value}, state) {
    if (state === null)
      return {
        valid: true,
        errors: []
      }
    return validate(value)
  }

  render() {
    const {children} = this.props
    return children(this.state)
  }
}

export const validate = (fun) => (Target) => (props) => (
  <FieldValidator validate={fun} value={props.value}>
    {(validation) => <Target {...validation} {...props} />}
  </FieldValidator>
)
