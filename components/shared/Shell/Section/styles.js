import {StyleSheet} from 'react-native'

import * as colors from '@/assets/colors'
import {margin} from '@/assets/styles'

export default StyleSheet.create({
  container: {
    backgroundColor: colors.gray.$f0f0,
    paddingTop: 40,
    paddingBottom: 50
  },
  title: {
    color: colors.gray.dark,
    fontWeight: '600',
    fontSize: 13,
    ...margin(null, 25, 10)
  }
})
