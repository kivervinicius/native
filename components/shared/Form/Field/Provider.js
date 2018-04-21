import _ from 'lodash/fp'
import {PureComponent} from 'react'

import {withForm} from '../Form/Provider'

const OK = {valid: true, errors: []}

const validate = (validations) => (value) =>
  validations.reduce(({valid, errors}, fun) => {
    const error = fun(value)
    if (error) return {valid: false, errors: errors.concat(error)}
    else return {valid, errors}
  }, OK)

export const withField = (Target) =>
  withForm(({name, value, validation, ...props}) => (
    <Target
      {...props}
      {...validation[name] || OK}
      value={value[name] || ''}
      validation={undefined}
      name={name}
    />
  ))

export const field = (Target) => ({children, ...props}) => (
  <FieldProvider {...props}>
    {(ctx) => <Target {...ctx}>{children}</Target>}
  </FieldProvider>
)

const childProps = _.omit([
  'onSubscribe',
  'onUnsubscribe',
  'onValidateField',
  'onChangeField'
])

@withField
export default class FieldProvider extends PureComponent {
  static defaultProps = {
    valid: true,
    errors: []
  }

  componentDidMount() {
    const {name, onSubscribe} = this.props
    onSubscribe(name, this)
  }

  componentWillUnmount() {
    const {name, onUnsubscribe} = this.props
    onUnsubscribe(name, this)
  }

  validate = (value) => validate(this.props.validations)(value)

  onValidate = () => {
    const {onValidateField, name} = this.props
    const state = this.validate(this.props.value)
    this.setState(state)
    onValidateField(name, state)
    return state.valid
  }

  onChange = (value) => {
    const {onChangeField, name} = this.props
    onChangeField(name, value)
  }

  render() {
    const {children, ...props} = this.props

    return children({
      ...childProps(props),
      onValidate: this.onValidate,
      onChange: this.onChange
    })
  }
}
