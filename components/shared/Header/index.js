import {Component} from 'react'
import {View, StatusBar, SafeAreaView, TouchableOpacity} from 'react-native'

import Logo from '@/components/shared/Logo'
import styles from './styles'

export default class Header extends Component {
  navigateTo = (route) => () => {
    const {navigation, scene} = this.props
    if (scene.route.routeName !== route) navigation.navigate(route)
  }

  render() {
    const {auth} = this.props

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.logo}>
            <TouchableOpacity onPress={this.navigateTo('home')}>
              <Logo height={40} />
            </TouchableOpacity>
          </View>
          <View style={styles.auth}>{auth}</View>
        </View>
      </SafeAreaView>
    )
  }
}
