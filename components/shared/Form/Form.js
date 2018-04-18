import {PureComponent} from 'react'

import {Provider} from './Context'

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
    const validations = {
      ...this.state.validations,
      [field]: valid
    }
    this.setState({validations})
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
