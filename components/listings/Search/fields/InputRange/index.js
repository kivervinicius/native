import {TextInput} from 'react-native'

import RangeComponent from '../RangeComponent'

export default class InputRangeField extends RangeComponent {
  renderField(type) {
    return (
      <TextInput
        value={Number(this.getValue(type))}
        keyboardType="numeric"
        onChangeText={this.onChange(type)}
      />
    )
  }
}
