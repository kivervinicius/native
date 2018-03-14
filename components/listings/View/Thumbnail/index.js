import {View, Button, Dimensions} from 'react-native'

import Image from '../../Image'
import styles from './styles'

const ActionButton = (props) => (
  <View style={styles.button}>
    <Button {...props} />
  </View>
)

export default function ListingThumbnail({images, matterport_code, onOpen}) {
  const image = images[0] || {}
  return (
    <View style={styles.container}>
      <Image thumbnail {...image} width={Dimensions.get('window').width} />
      <View style={styles.actions}>
        <ActionButton title="Ver Imagens" onPress={onOpen('gallery')} />
        {matterport_code && (
          <ActionButton title="Tour Virtual" onPress={onOpen('matterport')} />
        )}
      </View>
    </View>
  )
}
