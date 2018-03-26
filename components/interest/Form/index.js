import {Component} from 'react'
import {KeyboardAvoidingView, View, Text} from 'react-native'

import interestTypes from './interestTypes'
import SelectType from './SelectType'
import Fields from './Fields'
import $styles from './styles'

@$styles.inject
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
    const {styles} = this.props
    const value = this.state.value[type] || ''
    const Target = Fields[type]
    return (
      <View key={type} style={styles.field}>
        <Target
          value={value}
          style={styles.input}
          onChange={this.onChangeValue(type)}
        />
      </View>
    )
  }

  render() {
    const {styles, types} = this.props
    const {id} = this.selectedType
    const {fields} = interestTypes[id]

    return (
      <KeyboardAvoidingView style={styles.container}>
        <Text style={styles.text}>
          Escolha a melhor forma para agendar sua visita ao imóvel:
        </Text>
        <View style={styles.field}>
          <SelectType types={types} value={id} onChange={this.onChangeType} />
        </View>
        {fields.map(this.renderField)}
      </KeyboardAvoidingView>
    )
  }
}
