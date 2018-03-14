import {View, Text} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import Price from '@/components/shared/Price'
import styles from './styles'

const Property = ({children, icon}) => (
  <View style={styles.property}>
    <Icon name={icon} style={styles.icon} />
    <Text style={styles.propertyText}>{children.toUpperCase()}</Text>
  </View>
)

export default function ListingProperties(props) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Property icon="hotel">Quartos</Property>
        <Text style={styles.value}>{props.rooms}</Text>
      </View>
      <View style={styles.row}>
        <Property icon="water-pump">Banheiros</Property>
        <Text style={styles.value}>{props.bathrooms}</Text>
      </View>
      <View style={styles.row}>
        <Property icon="car">№ Vagas</Property>
        <Text style={styles.value}>{props.garage_spots}</Text>
      </View>
      <View style={styles.row}>
        <Property icon="domain">Andar</Property>
        <Text style={styles.value}>{props.floor}</Text>
      </View>
      <View style={styles.row}>
        <Property icon="vector-square">Área</Property>
        <Text style={styles.value}>{props.area}m²</Text>
      </View>
      <View style={styles.row}>
        <Property icon="currency-usd">Preço/m²</Property>
        <Price style={styles.value}>
          {Math.floor(props.price / props.area)}
        </Price>
      </View>
    </View>
  )
}
