import {Component} from 'react'
import {Text, View, TouchableOpacity} from 'react-native'

import styles from './styles'

export default class UserNav extends Component {
  state = {
    active: false
  }

  onToggle = () => this.setState((state) => ({active: !state.active}))

  onPress = () => {
    const {user, navigation} = this.props
    if (user) this.onToggle()
    else navigation.navigate('login')
  }

  render() {
    const {user} = this.props

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.onPress}>
          <Text style={styles.text}>
            {user ? `Welcome ${user.name}` : 'Login'}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}
