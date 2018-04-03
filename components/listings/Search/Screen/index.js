import {View, ScrollView, TouchableOpacity} from 'react-native'

import Text from '@/components/shared/Text'
import styles from './styles'

export default function SearchScreen({children, label, onSubmit}) {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <ScrollView>{children}</ScrollView>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity onPress={onSubmit}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>{label}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

SearchScreen.defaultProps = {
  label: 'Filtrar resultados'
}
