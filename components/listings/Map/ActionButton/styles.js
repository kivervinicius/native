import {StyleSheet} from 'react-native'

import * as colors from '@/assets/colors'
import {elevation, padding} from '@/assets/styles'

export default StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 20,
    ...padding(10, 20),
    ...elevation(5),
    backgroundColor: 'white',
    borderRadius: 5
  },
  text: {
    fontSize: 14,
    color: colors.blue.medium
  },
  icon: {
    fontSize: 25,
    marginLeft: -5,
    color: colors.blue.medium
  }
})
