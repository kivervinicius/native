import {Component} from 'react'
import {Button, View, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import styles from './styles'

export default function Field({children, onSubmit, onReturn}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onReturn}>
        <Icon name="chevron-left" size={30} />
      </TouchableOpacity>
      <View style={styles.body}>{children}</View>
      <View style={styles.footer}>
        <Button style={styles.button} title="Aplicar" onPress={onSubmit} />
      </View>
    </View>
  )
}

export const createField = (Target) =>
  class extends Component {
    displayName = `searchField(${Target.displayName || Target.name})`

    get name() {
      const {navigation} = this.props
      return navigation.state.routeName
    }

    get value() {
      const {navigation} = this.props
      const params = navigation.state.params
      return params ? params[this.name] : undefined
    }

    onChange = (value) => {
      const {navigation} = this.props
      navigation.setParams({[this.name]: value})
    }

    onReturn = () => {
      const {navigation} = this.props
      navigation.navigate('menu', navigation.state.params)
    }

    render() {
      const {onSubmit} = this.props
      return (
        <Field onSubmit={onSubmit} onReturn={this.onReturn}>
          <Target value={this.value} onChange={this.onChange} />
        </Field>
      )
    }
  }
