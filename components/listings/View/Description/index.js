import {View} from 'react-native'

import Text from '@/components/shared/Text'
import Price from '@/components/shared/Price'
import styles from './styles'

const Section = ({children, title, nested}) => (
  <View style={[styles.section, nested && styles.subSection]}>
    <Text style={styles.title}>{title.toUpperCase()}</Text>
    {children}
  </View>
)

export default function ListingDescrition(props) {
  const {maintenance_fee, property_tax} = props
  return (
    <View style={styles.container}>
      <Section title="O Imóvel">
        <Text style={styles.text}>{props.description}</Text>
      </Section>
      <Section title="Tipo do Imóvel">
        <Text style={styles.text}>{props.type}</Text>
      </Section>
      <View style={styles.sectionContainer}>
        <Section nested title="Condomínio">
          <Price nullable>{maintenance_fee}</Price>
        </Section>
        <Section nested title="IPTU">
          <Price nullable>{property_tax}</Price>
        </Section>
      </View>
    </View>
  )
}
