import {View, Button} from 'react-native'

import Text from '@/components/shared/Text'
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
      <Button
        title="Ok"
        color={buttonColor}
        style={styles.icon}
        onPress={onDismiss}
      />
    </View>
  )
}

export default $styles.inject(InterestMessage)
