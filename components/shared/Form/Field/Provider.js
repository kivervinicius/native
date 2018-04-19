import {PureComponent} from 'react'
import {View, KeyboardAvoidingView} from 'react-native'

import validate, {OK} from '@/lib/validations/validate'
import Text from '@/components/shared/Text'
import {Consumer} from '../Context'
import styles from './styles'

export const withField = (Target) =>
  withForm(({name, value, validation, ...props}) => (
    <Target
      {...props}
      {...validation[name] || OK}
      value={value[name]}
      validation={undefined}
    />
  ))

export const field = (Target) => (props) => (
  <FieldProvider>{(ctx) => <Target {...props} {...ctx} />}</FieldProvider>
)

export default class ControlledFormConsumer extends PureComponent {
  static defaultProps = {
    valid: true,
    errors: []
  }

  validate = (value) => validate(this.props.validations)(value)

  onValidate = () => {
    const state = this.validate(this.props.value)
    this.setState(state)
    this.props.onValidate(state)
    return state.valid
  }

  render() {
    const {children: render, valid, errors} = this.props

    return (
    )
  }
}
