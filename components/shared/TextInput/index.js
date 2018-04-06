import {Component} from 'react'
import {View, TextInput} from 'react-native'

import $styles from './styles'

@$styles.inject()
export default class ControlledTextInput extends Component {
  static defaultProps = {
    onValidate: () => true
  }

  onChange = (value) => {
    const {onChangeText, onValidate} = this.props
    if (onChangeText) onChangeText(value, onValidate(value))
  }

  render() {
    const {styles, style, ...props} = this.props
    return (
      <View style={styles.container.concat(style)}>
        <TextInput
          {...props}
          style={styles.input}
          onChangeText={this.onChange}
        />
      </View>
    )
  }
}
