import {Component} from 'react'
import {
  KeyboardAvoidingView,
  ScrollView,
  View,
  Text,
  Button
} from 'react-native'

import interestTypes from './interestTypes'
import SelectType from './SelectType'
import Fields from './Fields'
import $styles from './styles'

@$styles.inject
export default class InterestForm extends Component {
  state = {
    type: 0
  }

  constructor(props) {
    super(props)
    this.state.type = props.types[0].id
  }

  onChangeValue = (field) => (value) => this.setState({[field]: value})

  onChangeType = (id) => this.setState({type: id})

  onSubmit = () => this.props.onSubmit(this.state)

  renderField = (type) => {
    const {styles} = this.props
    const value = this.state[type] || ''
    const Target = Fields[type]
    return (
      <View key={type} style={styles.field}>
        <Target value={value} onChange={this.onChangeValue(type)} />
      </View>
    )
  }

  render() {
    const {styles, types} = this.props
    const {type} = this.state
    const {fields} = interestTypes[type]

    return (
      <ScrollView style={styles.container}>
        <Text style={styles.text}>
          Escolha a melhor forma para agendar sua visita ao imóvel:
        </Text>
        <KeyboardAvoidingView style={{flex: 1}}>
          <View style={styles.field}>
            <SelectType
              types={types}
              value={type}
              onChange={this.onChangeType}
            />
          </View>
          {fields.map(this.renderField)}
        </KeyboardAvoidingView>
        <Button title="Enviar" onPress={this.onSubmit} />
      </ScrollView>
    )
  }
}
