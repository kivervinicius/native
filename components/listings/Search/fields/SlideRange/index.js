import _ from 'lodash'
import {Component} from 'react'
import {View, Dimensions} from 'react-native'
import MultiSlider from '@ptomasroos/react-native-multi-slider'

import Text from '@/components/shared/Text'
import styles from './styles'

const SLIDER_WIDTH = Dimensions.get('window').width - 80

export default class SlideRangeField extends Component {
  static defaultProps = {
    min: 0,
    value: {},
    renderLabel(value) {
      return <Text style={styles.text}>{value}</Text>
    }
  }

  onChangeSlider = _.throttle(
    ([min, max]) => this.props.onChange({min, max}),
    200
  )

  parseValue = (value) => Number(value)

  get range() {
    const {min, max} = this.props
    return max - min
  }

  get displayValue() {
    const {min, max, value} = this.props
    return {
      min: value.min || min,
      max: value.max || max
    }
  }

  renderInput(type) {
    const {renderLabel} = this.props
    return (
      <View style={styles.label}>{renderLabel(this.displayValue[type])}</View>
    )
  }

  renderSlider() {
    const {min, max, step} = this.props
    const value = this.displayValue
    return (
      <MultiSlider
        values={[value.min, value.max]}
        min={min}
        max={max}
        step={step}
        sliderLength={SLIDER_WIDTH}
        onValuesChange={this.onChangeSlider}
      />
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          {this.renderInput('min')}
          <Text style={styles.separator}>{String.fromCharCode(0x2500)}</Text>
          {this.renderInput('max')}
        </View>
        <View style={styles.slider}>{this.renderSlider()}</View>
      </View>
    )
  }
}
