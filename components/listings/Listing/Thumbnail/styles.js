import {StyleSheet, Platform} from 'react-native'

const matterportBackground = '#313435'

import * as colors from '@/assets/colors'

export default StyleSheet.create({
  container: {
    display: 'flex',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: colors.gray.lighter,
    width: '100%'
  },
  actions: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 5
  },
  icon: {
    padding: 10,
    fontSize: 25,
    color: colors.gray.dark
  }
})
