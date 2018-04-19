import _ from 'lodash/fp'
import {PureComponent} from 'react'

import {Provider, Consumer} from '../Context'

const isValid = _.flow(
  _.values,
  _.findIndex((value) => value === false),
  (index) => index === -1
)

export const withForm = (Target) => (props) => (
  <FormProvider {...props}>
    <Consumer>{({...ctx}) => <Target {...props} {...ctx} />}</Consumer>
  </FormProvider>
)

export default class FormProvider extends PureComponent {
  static defaultProps = {
    value: {}
  }

  state = {
    valid: true,
    value: {},
    validation: {}
  }

  constructor(props) {
    super(props)
    if (props.defaultValue) this.state.value = props.defaultValue
  }

  onChange = (field) => (value) => {
    const {onChange} = this.props
    const result = {
      ...this.state.value,
      [field]: value
    }
    this.setState({value: result})
    if (onChange) onChange(result)
  }

  onValidate = (field) => (value) => {
    const {onValidate} = this.props
    const result = {
      ...this.state.validation,
      [field]: value
    }
    const valid = isValid(result)
    this.setState({validation: result, valid})
    if (onValidate) onValidate(valid)
  }

  get value() {
    return {
      ...this.state,
      onChange: this.onChange,
      onValidate: this.onValidate
    }
  }

  render() {
    const {children} = this.props
    return <Provider value={this.value}>{children}</Provider>
  }
}
