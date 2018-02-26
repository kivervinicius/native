import {Fragment} from 'react'
import {StatusBar, SafeAreaView, TouchableHighlight} from 'react-native'

import Logo from '@/components/shared/Logo'
import styles from './styles'

export default function Header({navigation, scene}) {
  let gotoHome
  if (scene.route.routeName !== 'home')
    gotoHome = () => navigation.navigate('home')

  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <TouchableHighlight onPress={gotoHome} style={styles.logo}>
          <Logo height={40} />
        </TouchableHighlight>
      </SafeAreaView>
    </Fragment>
  )
}
