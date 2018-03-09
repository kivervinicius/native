import {Component} from 'react'
import {View, Text, Picker} from 'react-native'

import styles from './styles'

export default class RangeField extends Component {
  state = {
    min: undefined,
    max: undefined
  }

  onChange = (type) => (value) => this.setState({[type]: value})

  renderField(type) {
    const {options} = this.props
    return (
      <View style={styles.field}>
        <Picker selectedValue={this.state[type]} onValueChange={this.onChange}>
          {options.map((props) => <Picker.Item key={props.value} {...props} />)}
        </Picker>
      </View>
    )
  }

  render() {
    const {style} = this.props
    return (
      <View style={[style, styles.container]}>
        {this.renderField('min')}
        <Text style={styles.divider}>ATÉ</Text>
        {this.renderField('max')}
      </View>
    )
  }
}
