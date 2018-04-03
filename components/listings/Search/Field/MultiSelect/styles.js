import {StyleSheet} from 'react-native'

import * as colors from '@/assets/colors'

export default StyleSheet.create({
  button: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15
  },
  buttonText: {
    color: colors.blue.medium
  },
  buttonIcon: {
    fontSize: 20,
    color: colors.blue.medium
  }
})

export const button = StyleSheet.create({})
