import {StyleSheet} from 'react-native'

import * as colors from '@/assets/colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex'
  },
  body: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center'
  },
  footer: {
    padding: 10,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: colors.gray.$f0f0
  },
  button: {
    padding: 10,
    backgroundColor: colors.blue.medium,
    borderWidth: 1,
    borderColor: colors.blue.light,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: 'white'
  }
})
