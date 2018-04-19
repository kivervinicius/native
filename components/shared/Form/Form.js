import _ from 'lodash/fp'
import {PureComponent} from 'react'

import {Provider} from './Context'

const isValid = _.flow(
  _.values,
  _.findIndex((value) => value === false),
  (index) => index === -1
)

export default class FormProvider extends PureComponent {
  static defaultProps = {
    value: {}
  }

  state = {
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
    this.setState({validation: result})
    if (onValidate) onValidate(isValid(result))
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
