import {View} from 'react-native'
import styles from './styles'

import Button from './Button'

export default function Navigation({user, navigation}) {
  const navigateTo = (scene) => () => navigation.navigate(scene)
  return (
    <View style={styles.container}>
      <Button onPress={navigateTo('home')}>Home</Button>
      <Button onPress={navigateTo('create')}>Anunciar</Button>
      <Button onPress={navigateTo('liked')}>Salvos</Button>
      {user ? (
        <Button>Perfil</Button>
      ) : (
        <Button onPress={navigateTo('login')}>Login</Button>
      )}
      <Button>Mais</Button>
    </View>
  )
}
