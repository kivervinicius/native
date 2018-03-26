import {Component} from 'react'
import {View, Text} from 'react-native'
import interestTypes from './interestTypes'
import Fields from './Fields'

export default class InterestForm extends Component {
  state = {
    activeIndex: 0,
    value: {}
  }

  onChange = (field) => (value) =>
    this.setState({
      value: {[field]: value}
    })

  get selectedType() {
    return this.props.types[this.state.activeIndex]
  }

  renderField = (type) => {
    const value = this.state.value[type] || ''
    const Target = Fields[type]
    return <Target value={value} onChange={this.onChange(type)} />
  }

  render() {
    const {id, text} = this.selectedType
    const {fields} = interestTypes[id]

    return (
      <View>
        <Text>{text}</Text>
        {fields.map(this.renderField)}
      </View>
    )
  }
}
