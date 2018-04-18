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
    validations: {}
  }

  onChange = (field) => (value) =>
    this.props.onChange({
      ...this.props.value,
      [field]: value
    })

  onValidate = (field) => (valid) => {
    const {onValidate} = this.props
    const validations = {
      ...this.state.validations,
      [field]: valid
    }
    this.setState({validations})
    if (onValidate) onValidate(isValid(validations))
  }

  get value() {
    return {
      value: this.props.value,
      onChange: this.onChange,
      onValidate: this.onValidate
    }
  }

  render() {
    const {children} = this.props
    return <Provider value={this.value}>{children}</Provider>
  }
}
