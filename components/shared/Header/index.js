import {Component} from 'react'
import {View, TextInput, SafeAreaView, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import Text from '@/components/shared/Text'
import styles from './styles'

export default class Header extends Component {
  state = {
    value: ''
  }

  render() {
    const {onSearchOptions} = this.props
    const {value} = this.state

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.wrapper}>
          <Icon name="magnify" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Pesquisa"
            value={value}
            onChangeText={this.onChange}
          />
          <TouchableOpacity style={styles.button} onPress={onSearchOptions}>
            <Text style={styles.buttonText}>Filtrar</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    )
  }
}
