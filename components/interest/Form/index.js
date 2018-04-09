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
  return validateFn ? validateFn(value) : null
}

const validateValues = (values) => _.mapValues(values, validateField)

const isValid = (validation) => typeof validation !== 'string'

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

  onChangeType = (id) => {
    this.setState({activeType: id})
    this.onValidate()
  }

  onSubmit = () => {
    if (this.onValidate()) {
      this.props.onSubmit(this.state)
    }
  }

  onValidate = () => {
    const {activeType} = this
    const {onValidate} = this.props
    const values = activeType.fields.reduce(
      (values, key) => ({
        ...values,
        [key]: this.state.values[key]
      }),
      {}
    )
    const validations = validateValues(values)
    const valid = _.findKey(validations, _.negate(isValid)) === -1
    this.setState({validations, isValid: valid})
    if (onValidate) onValidate(valid)
    return valid
  }

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
          onBlur={this.onValidate}
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
