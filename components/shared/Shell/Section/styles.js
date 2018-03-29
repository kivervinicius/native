import {StyleSheet} from 'react-native'

import * as colors from '@/assets/colors'
import {padding} from '@/assets/styles'

export default StyleSheet.create({
  title: {
    color: colors.gray.dark,
    fontWeight: '600',
    fontSize: 13,
    marginTop: 10,
    ...padding(null, 20)
  }
})
