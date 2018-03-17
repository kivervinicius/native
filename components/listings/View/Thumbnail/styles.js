import {StyleSheet, Platform} from 'react-native'

const matterportBackground = '#313435'

import * as $colors from '@/assets/colors'

export const colors = {
  button: Platform.select({
    ios: 'white',
    android: matterportBackground
  })
}

export default StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%'
  },
  actions: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: $colors.gray.light,
    borderBottomWidth: StyleSheet.hairlineWidth,
    backgroundColor: Platform.select({
      ios: matterportBackground,
      android: colors.button
    })
  },
  button: {
    flex: 1
  }
})
