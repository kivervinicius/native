import {Component} from 'react'
import {KeyboardAvoidingView, View} from 'react-native'

import Text from '@/components/shared/Text'
import Button from '@/components/shared/Button'
import Separator from '@/components/shared/Separator'
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
        <Text style={styles.text}>
          Escolha a melhor forma para agendar sua visita
        </Text>
        <Button raised color="lightblue" onPress={onOpenCalendly}>
          Agendamento Online
        </Button>
        <Separator style={styles.separator}>OU</Separator>
        <KeyboardAvoidingView>
          <SelectType types={types} value={type} onChange={this.onChangeType} />
          {fields && fields.map(this.renderField)}
        </KeyboardAvoidingView>
      </View>
    )
  }
}
