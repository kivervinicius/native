import {Component} from 'react'
import {Text, View, FlatList, TouchableOpacity} from 'react-native'

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

  renderMenuItem({item: {label, ...props}}) {
    return (
      <TouchableOpacity style={styles.menuItem} {...props}>
        <Text style={styles.menuText}>{label}</Text>
      </TouchableOpacity>
    )
  }

  renderMenu() {
    const {onLogout} = this.props
    return (
      <FlatList
        style={styles.menu}
        data={[{key: 'logout', label: 'Logout', onPress: onLogout}]}
        renderItem={this.renderMenuItem.bind(this)}
      />
    )
  }

  render() {
    const {user} = this.props
    const {active} = this.state

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.onPress}>
          <Text style={styles.text}>
            {user ? `Welcome ${user.name}` : 'Login'}
          </Text>
        </TouchableOpacity>
        {active && this.renderMenu()}
      </View>
    )
  }
}
