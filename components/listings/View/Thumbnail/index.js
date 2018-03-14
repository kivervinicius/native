import {View, Button, Dimensions} from 'react-native'

import Image from '../../Image'
import styles from './styles'

export default function ListingThumbnail({images, matterport_code, onOpen}) {
  const image = images[0] || {}
  return (
    <View style={styles.container}>
      <Image thumbnail {...image} width={Dimensions.get('window').width} />
      <View style={styles.actions}>
        <Button title="Ver Imagens" onPress={onOpen('gallery')} />
        {matterport_code && (
          <Button title="Tour Virtual" onPress={onOpen('matterport')} />
        )}
      </View>
    </View>
  )
}
