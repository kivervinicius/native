import {TextInput} from 'react-native'

import RangeComponent from '../RangeComponent'
import styles from './styles'

export default class InputRangeField extends RangeComponent {
  parseValue = (value) => Number(value)

  renderField(type) {
    const {label} = this.props
    let value = this.getValue(type)
    if (isNaN(value)) value = ''
    return (
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={String(value)}
        placeholder={typeof label === 'function' ? label(type) : label}
        onChangeText={this.onChange(type)}
      />
    )
  }
}
