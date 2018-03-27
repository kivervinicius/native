import {StyleSheet} from 'react-native'

import * as colors from '@/assets/colors'
import {elevation, margin, padding} from '@/assets/styles'

export default StyleSheet.create({
  container: {
    backgroundColor: 'white'
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    backgroundColor: 'white',
    borderColor: colors.gray.lighter,
    borderWidth: StyleSheet.hairlineWidth,
    ...elevation(6),
    ...margin(10, 20)
  },
  input: {
    flex: 1,
    color: colors.gray.dark,
    fontSize: 16,
    ...margin(0, 5)
  },
  icon: {
    fontSize: 27,
    color: colors.gray.mediumDark
  },
  button: {
    ...padding(0, 10)
  },
  buttonText: {
    fontSize: 14,
    color: colors.blue.medium
  }
})
