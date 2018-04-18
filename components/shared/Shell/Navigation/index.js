import {View} from 'react-native'
import styles from './styles'

import Button from './Button'

export default function Navigation({user, navigation}) {
  const navigateTo = (scene) => () => navigation.navigate(scene)
  return (
    <View style={styles.container}>
      <Button icon="magnify" onPress={navigateTo('listings')}>
        Busca
      </Button>
      {user ? (
        <Button icon="account-outline">Perfil</Button>
      ) : (
        <Button icon="account-outline" onPress={navigateTo('auth')}>
          Login
        </Button>
      )}
      <Button icon="plus-outline" onPress={navigateTo('create')}>
        Anunciar
      </Button>
      <Button icon="heart-outline" onPress={navigateTo('liked')}>
        Salvos
      </Button>
      <Button icon="dots-horizontal">Mais</Button>
    </View>
  )
}
