import StyleSheet from '@/assets/StyleSheet'
import {padding} from '@/assets/styles'

export default StyleSheet({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'baseline'
  },
  currency: {
    ...padding(null, '1%', '0.5%', null)
  }
})
