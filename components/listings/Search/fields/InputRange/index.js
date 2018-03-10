import {TextInput} from 'react-native'

import RangeComponent from '../RangeComponent'

export default class InputRangeField extends RangeComponent {
  renderField(type) {
    return (
      <TextInput
        keyboardType="numeric"
        value={Number(this.getValue(type))}
        onChangeText={this.onChange(type)}
      />
    )
  }
}
