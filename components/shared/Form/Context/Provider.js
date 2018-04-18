import {Component} from 'react'

import {Provider} from './Consumer'

export default class FormProvider extends Component {
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
