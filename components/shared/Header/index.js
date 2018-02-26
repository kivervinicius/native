import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  TouchableHighlight
} from 'react-native'

import Logo from '@/components/shared/Logo'
import styles from './styles'

const navigateTo = (navigation, scene) => (route) => () => {
  if (scene.route.routeName !== route) {
    navigation.navigate(route)
  }
}

export default function Header({navigation, scene}) {
  const navigateToThis = navigateTo(navigation, scene)

  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.logo}
          onPress={navigateToThis('home')}
        >
          <Logo height={40} />
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.login}
          onPress={navigateToThis('login')}
        >
          <Text style={styles.loginButton}>Login</Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  )
}
