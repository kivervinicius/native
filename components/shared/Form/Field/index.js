import {PureComponent} from 'react'
import {View, KeyboardAvoidingView} from 'react-native'

import validate, {OK} from '@/lib/validations/validate'
import Text from '@/components/shared/Text'
import {Consumer} from '../Context'
import styles from './styles'

export default class ControlledFormConsumer extends PureComponent {
  static defaultProps = {
    validations: []
  }

  state = OK

  validate = (value) => validate(this.props.validations)(value)

  onValidate = () => {
    const state = this.validate(this.props.value)
    this.setState(state)
    this.props.onValidate(state.valid, state.errors)
    return state.valid
  }

  render() {
    const {children: render} = this.props
    const {valid, errors} = this.state

    return (
      <KeyboardAvoidingView>
        <View style={styles.container}>
          {render({...this.state, onBlur: this.onValidate})}
          {!valid && (
            <View style={styles.errors}>
              {errors.map((message, i) => (
                <Text key={i} style={styles.text}>
                  {message}
                </Text>
              ))}
            </View>
          )}
        </View>
      </KeyboardAvoidingView>
    )
  }
}

export const pureField = (Target) => ({name, ...props}) => (
  <Consumer>
    {({value, onChange, onValidate}) => (
      <Target
        {...props}
        onChange={onChange(name)}
        onValidate={onValidate(name)}
        value={value[name]}
      />
    )}
  </Consumer>
)

export const field = (options) => (Target) =>
  pureField((props) => (
    <ControlledFormConsumer {...props} {...options}>
      {(ctx) => <Target {...ctx} {...props} />}
    </ControlledFormConsumer>
  ))
