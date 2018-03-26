import {Component} from 'react'
import {View, Text} from 'react-native'

import interestTypes from './interestTypes'
import SelectType from './SelectType'
import Fields from './Fields'

export default class InterestForm extends Component {
  state = {
    activeIndex: 0,
    value: {}
  }

  onChangeValue = (field) => (value) =>
    this.setState({
      value: {[field]: value}
    })

  onChangeType = (id) =>
    this.setState({
      activeIndex: this.props.types.findIndex((t) => t.id == id)
    })

  get selectedType() {
    return this.props.types[this.state.activeIndex]
  }

  renderField = (type) => {
    const value = this.state.value[type] || ''
    const Target = Fields[type]
    return (
      <Target key={type} value={value} onChange={this.onChangeValue(type)} />
    )
  }

  render() {
    const {types} = this.props
    const {id, text} = this.selectedType
    const {fields} = interestTypes[id]

    return (
      <View>
        <Text>{text}</Text>
        <SelectType types={types} value={id} onChange={this.onChangeType} />
        {fields.map(this.renderField)}
      </View>
    )
  }
}
