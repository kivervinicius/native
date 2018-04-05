import {View} from 'react-native'

import Text from '@/components/shared/Text'
import Footer from '@/components/shared/Shell/Footer'
import $styles from './styles'

function InterestMessage({styles, onDismiss}) {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={$styles.all(styles.text, styles.title)}>
          Agente EmCasa Notificado
        </Text>
        <Text style={styles.text}>
          Entraremos em contato o mais rápido possível para agendarmos uma
          visita!
        </Text>
      </View>
      <Footer label="Ok" color="green" onPress={onDismiss} />
    </View>
  )
}

export default $styles.inject()(InterestMessage)
