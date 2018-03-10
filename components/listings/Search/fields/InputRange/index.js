import {TextInput} from 'react-native'

import RangeComponent from '../RangeComponent'

export default class InputRangeField extends RangeComponent {
  parseValue = (value) => Number(value)

  renderField(type) {
    let value = this.getValue(type)
    if (isNaN(value)) value = ''
    return (
      <TextInput
        keyboardType="numeric"
        value={String(value)}
        onChangeText={this.onChange(type)}
      />
    )
  }
}
