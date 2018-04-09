import _ from 'lodash'
import update from 'immutability-helper'
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
  return validateFn ? validateFn(value) : null
}

const validateValues = (values) => _.mapValues(values, validateField)

const isValid = (validation) => typeof validation !== 'string'

@$styles.inject()
export default class InterestForm extends Component {
  state = {
    values: {},
    validations: {},
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

  onChangeType = (id) => {
    this.setState({activeType: id})
  }

  onSubmit = () => {
    if (this.onValidate()) {
      this.props.onSubmit(this.state)
    }
  }

  getValues = (fields) =>
    fields.reduce(
      (values, key) => ({
        ...values,
        [key]: this.state.values[key]
      }),
      {}
    )

  onValidateField = (...fields) => () => {
    const {onValidate} = this.props
    const validations = validateValues(this.getValues(fields))
    const valid = _.findKey(validations, _.negate(isValid)) === undefined
    this.setState({
      validations: update(this.state.validations, {$merge: validations})
    })
    if (onValidate) onValidate(valid)
    return valid
  }

  onValidate = () => this.onValidateField(...this.activeType.fields)()

  renderField = (type) => {
    const {styles} = this.props
    const {values, validations} = this.state
    const value = values[type] || ''
    const validation = validations[type] || null
    const valid = isValid(validation)
    const Target = Fields[type]
    return (
      <View key={type} style={styles.field}>
        <Target
          invalid={!valid}
          value={value}
          onBlur={this.onValidateField(type)}
          onChange={this.onChangeValue(type)}
        />
        {!valid && <Text style={styles.validation}>{validation}</Text>}
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
        <Button raised color="lightgreen" onPress={onOpenCalendly}>
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
