import _ from 'lodash/fp'
import {PureComponent} from 'react'

import validate, {OK} from '@/lib/validations/validate'
import {withForm} from '../Form/Provider'

export const withField = (Target) =>
  withForm(({name, value, validation, ...props}) => (
    <Target
      {...props}
      {...validation[name] || OK}
      value={value[name] || ''}
      validation={undefined}
    />
  ))

export const field = (Target) => ({validations, ...props}) => (
  <FieldProvider validations={validations}>
    {(ctx) => <Target {...props} {...ctx} />}
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
