import {StyleSheet} from 'react-native'

import {margin} from '@/assets/styles'

export default StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  field: {
    flex: 0.5
  },
  divider: {
    fontWeight: '600',
    ...margin(null, 10)
  }
})
