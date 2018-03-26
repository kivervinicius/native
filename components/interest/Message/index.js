import {View, Text, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import $styles, {buttonColor} from './styles'

function InterestMessage({styles, onDismiss}) {
  return (
    <View style={styles.container}>
      <Text style={$styles.all(styles.text, styles.title)}>
        Agente EmCasa Notificado
      </Text>
      <Text style={styles.text}>
        Entraremos em contato o mais rápido possível para agendarmos uma visita!
      </Text>
      <TouchableOpacity onPress={onDismiss}>
        <Icon.Button
          style={styles.button}
          name="check"
          backgroundColor={buttonColor}
          style={styles.icon}
        >
          Ok
        </Icon.Button>
      </TouchableOpacity>
    </View>
  )
}

export default $styles.inject(InterestMessage)
