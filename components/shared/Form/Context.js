import React, {Component} from 'react'

const Context = React.createContext({
  value: {},
  onChange: () => () => null
})

export const field = (Target) => ({name, ...props}) => (
  <Context.Consumer>
    {({value, onChange}) => (
      <Target {...props} onChange={onChange(name)} value={value[name]} />
    )}
  </Context.Consumer>
)

export default class FormProvider extends Component {
  static defaultProps = {
    value: {}
  }

  onChange = (field) => (value) =>
    this.props.onChange({
      ...this.props.value,
      [field]: value
    })

  get value() {
    return {
      value: this.props.value,
      onChange: this.onChange
    }
  }

  render() {
    const {children} = this.props
    return <Context.Provider value={this.value}>{children}</Context.Provider>
  }
}
