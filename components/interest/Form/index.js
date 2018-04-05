import {Component} from 'react'
import {KeyboardAvoidingView, ScrollView, View, Button} from 'react-native'

import Text from '@/components/shared/Text'
import Footer from '@/components/shared/Shell/Footer'
import interestTypes from './interestTypes'
import SelectType from './SelectType'
import Fields from './Fields'
import $styles from './styles'

@$styles.inject()
export default class InterestForm extends Component {
  state = {
    type: undefined
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
    const {styles, types, onOpenCalendly} = this.props
    const {type} = this.state
    const fields = type ? interestTypes[type].fields : undefined

    return (
      <View style={styles.container}>
        <ScrollView style={styles.body}>
          <Text style={styles.text}>
            Escolha a melhor forma para agendar sua visita ao imóvel:
          </Text>
          <Button title="Agendamento Online" onPress={onOpenCalendly} />
          <Text style={styles.separator}>OU</Text>
          <KeyboardAvoidingView>
            <View style={styles.field}>
              <SelectType
                types={types}
                value={type}
                onChange={this.onChangeType}
              />
            </View>
            {fields && fields.map(this.renderField)}
          </KeyboardAvoidingView>
        </ScrollView>
        <Footer label="Enviar" color="green" onPress={this.onSubmit} />
      </View>
    )
  }
}
