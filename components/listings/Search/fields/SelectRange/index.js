import {Picker} from 'react-native'

import RangeComponent from '../RangeComponent'

export default class SelectRangeField extends RangeComponent {
  renderField(type) {
    const {options} = this.props
    return (
      <Picker
        selectedValue={this.getValue(type)}
        onValueChange={this.onChange(type)}
      >
        {options.map((props) => <Picker.Item key={props.value} {...props} />)}
      </Picker>
    )
  }
}
