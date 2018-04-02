import {StyleSheet} from 'react-native'

import * as colors from '@/assets/colors'
import {elevation, margin} from '@/assets/styles'

export default StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15
  },
  text: {
    color: colors.blue.medium
  },
  icon: {
    fontSize: 20,
    color: colors.blue.medium
  }
})
