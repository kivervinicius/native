import {View, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import Text from '@/components/shared/Text'
import styles from './styles'

export default function ListingMapScreen({children, onDismiss}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonWrapper} onPress={onDismiss}>
        <View style={styles.button}>
          <Icon style={styles.buttonIcon} name="chevron-left" />
          <Text style={styles.buttonText}>Ver listagem de imóveis</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.body}>{children}</View>
    </View>
  )
}
