import _ from 'lodash/fp'
import {Component} from 'react'
import {KeyboardAvoidingView, View} from 'react-native'

import Text from '@/components/shared/Text'
import Button from '@/components/shared/Button'
import Separator from '@/components/shared/Separator'
import interestTypes from './interestTypes'
import SelectType from './SelectType'
import Fields from './Fields'
import $styles from './styles'

const validate = _.mapValues((value, key) => Fields[key].validate(value))

@$styles.inject()
export default class InterestForm extends Component {
  state = {
    activeType: undefined,
    values: {},
    validation: {}
  }

  constructor(props) {
    super(props)
    this.state.type = props.types[0].id
  }

  onChangeValue = (field) => (value) =>
    this.setState(({values}) => ({
      values: {
        ...values,
        [field]: value
      }
    }))

  onChangeType = (id) => this.setState({activeType: id})

  onSubmit = () => {
    if (this.validate()) {
      this.props.onSubmit(this.state)
    }
  }

  validate = () => {
    const {values} = this.props
    const validation = validate(values)
    this.setState({validation})
    return validation.findIndex(_.isEmpty) === -1
  }

  renderField = (type) => {
    const {styles} = this.props
    const value = this.state.values[type] || ''
    const valid = this.state.validation[type] || true
    const Target = Fields[type]
    return (
      <View key={type} style={styles.field}>
        <Target
          invalid={!valid}
          value={value}
          onChange={this.onChangeValue(type)}
        />
      </View>
    )
  }

  render() {
    const {styles, types, onOpenCalendly} = this.props
    const {activeType} = this.state
    const fields = activeType ? interestTypes[activeType].fields : undefined

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
          <SelectType
            types={types}
            value={activeType}
            onChange={this.onChangeType}
          />
          {fields && fields.map(this.renderField)}
        </KeyboardAvoidingView>
      </View>
    )
  }
}
