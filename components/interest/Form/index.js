import _ from 'lodash'
import {Component} from 'react'
import {View, Text} from 'react-native'

export default class InterestForm extends Component {
  state = {}

  constructor(props) {
    super(props)
    this.state.active = props.types[0].id
  }

  onChange = (field) => (value) => this.setState({[field]: value})

  get selectedType() {
    return this.props.types.find(({id}) => id === this.state.active)
  }

  render() {
    const {text} = this.selectedType
    return (
      <View>
        <Text>Marcar Visita</Text>
        <Text>{text}</Text>
      </View>
    )
  }
}
