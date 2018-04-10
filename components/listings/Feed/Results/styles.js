import {StyleSheet} from 'react-native'

import * as colors from '@/assets/colors'

export default StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
    marginBottom: 5
  },
  text: {
    margin: 2,
    fontSize: 20,
    fontWeight: '300',
    color: colors.gray.dark
  },
  highlight: {
    color: colors.blue.medium
  }
})
