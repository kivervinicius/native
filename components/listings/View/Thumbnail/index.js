import {View, Button, Dimensions} from 'react-native'

import Matterport from '@/components/listings/Matterport'
import Image from '../../Image'
import styles, {colors} from './styles'

const WIDTH = Dimensions.get('window').width
const HEIGHT = WIDTH * 0.64

const ActionButton = (props) => (
  <View style={styles.button}>
    <Button color={colors.button} {...props} />
  </View>
)

export default function ListingThumbnail({
  images,
  matterport_code,
  onOpen,
  onInterest
}) {
  const image = images[0] || {}
  return (
    <View style={styles.container}>
      <View style={styles.actions}>
        <ActionButton title="Marcar Visita" onPress={onInterest} />
      </View>
      <Matterport code={matterport_code} width={WIDTH} height={HEIGHT}>
        <Image thumbnail {...image} width={WIDTH} height={HEIGHT} />
      </Matterport>
      <View style={styles.actions}>
        <ActionButton title="Ver Imagens" onPress={onOpen('gallery')} />
        {matterport_code && (
          <ActionButton
            title="Ver em Tela Cheia"
            onPress={onOpen('matterport')}
          />
        )}
      </View>
    </View>
  )
}
