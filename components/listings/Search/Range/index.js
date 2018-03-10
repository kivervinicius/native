import {TextInput} from 'react-native'

import RangeComponent from '../RangeComponent'

export default class RangeField extends RangeComponent {
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
