import _ from 'lodash'
import {Component} from 'react'
import {KeyboardAvoidingView, View} from 'react-native'

import Text from '@/components/shared/Text'
import Button from '@/components/shared/Button'
import Separator from '@/components/shared/Separator'
import interestTypes from './interestTypes'
import SelectType from './SelectType'
import Fields from './Fields'
import $styles from './styles'

const validateField = (value, name) => {
  const validateFn = Fields[name].validate
  return validateFn ? validateFn(value) : true
}

const validateValues = (values) => _.mapValues(values, validateField)

const isValidInterestType = (validations, type) => {
  const target = interestTypes[type]
  for (const key of target.fields) {
    if (!(key in validations) && Fields[key].validate) return false
    if (!validations[key]) return false
  }
  return true
}

@$styles.inject()
export default class InterestForm extends Component {
  state = {
    values: {},
    validations: {},
    isValid: false,
    activeType: undefined
  }

  constructor(props) {
    super(props)
    this.state.activeType = props.types[0].id
  }

  get activeType() {
    const {activeType} = this.state
    return activeType ? interestTypes[activeType] : undefined
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
    if (this.onValidate()) {
      this.props.onSubmit(this.state)
    }
  }

  onValidate = () => {
    const {onValidate} = this.props
    const {values, activeType} = this.state
    const validations = validateValues(values)
    const isValid = isValidInterestType(validations, activeType)
    this.setState({validations, isValid})
    if (onValidate) onValidate(isValid)
    return isValid
  }

  renderField = (type) => {
    const {styles} = this.props
    const {values, validations} = this.state
    const value = values[type] || ''
    const valid = !(type in validations) || validations[type]
    const Target = Fields[type]
    return (
      <View key={type} style={styles.field}>
        <Target
          invalid={!valid}
          value={value}
          onBlur={this.onValidate}
          onChange={this.onChangeValue(type)}
        />
      </View>
    )
  }

  render() {
    const {styles, types, onOpenCalendly} = this.props
    const {activeType} = this

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
            value={this.state.activeType}
            onChange={this.onChangeType}
          />
          {activeType.fields.map(this.renderField)}
        </KeyboardAvoidingView>
      </View>
    )
  }
}
