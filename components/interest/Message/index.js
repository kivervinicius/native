import {View} from 'react-native'

import Text from '@/components/shared/Text'
import $styles from './styles'

function InterestMessage({styles}) {
  return (
    <View style={styles.container}>
      <Text style={$styles.all(styles.text, styles.title)}>
        Agente EmCasa Notificado
      </Text>
      <Text style={styles.text}>
        Entraremos em contato o mais rápido possível para agendarmos uma visita!
      </Text>
    </View>
  )
}

export default $styles.inject()(InterestMessage)
