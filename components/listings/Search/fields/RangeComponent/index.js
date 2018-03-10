import {Component} from 'react'
import {View, Text} from 'react-native'

import styles from './styles'

export default class RangeFieldComponent extends Component {
  styles = {}

  onChange = (type) => (value) =>
    this.props.onChange({
      ...this.props.value,
      [type]: this.parseValue(value)
    })

  parseValue = (value) => value

  getValue = (type) => this.props.value[type]

  renderField() {
    throw new Error('renderField() has not been implemented.')
  }

  render() {
    const {style} = this.props
    return (
      <View style={[style, styles.container, this.styles.container]}>
        <View style={[styles.field, this.styles.field]}>
          {this.renderField('min')}
        </View>
        <Text style={[styles.divider, this.styles.divider]}>ATÉ</Text>
        <View style={[styles.field, this.styles.field]}>
          {this.renderField('max')}
        </View>
      </View>
    )
  }
}
