import {StyleSheet} from 'react-native'

import * as colors from '@/assets/colors'

export default StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15
  },
  street: {
    color: colors.gray.mediumDark
  }
})

export const button = StyleSheet.create({
  container: {
    backgroundColor: colors.green.medium
  }
})
