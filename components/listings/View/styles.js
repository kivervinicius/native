import {StyleSheet} from 'react-native'

import * as colors from '@/assets/colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex'
  },
  header: {
    borderColor: colors.gray.light,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 10
  }
})
