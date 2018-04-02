import {StyleSheet} from 'react-native'

import {margin} from '@/assets/styles'

export default StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%'
  },
  label: {
    display: 'flex',
    flexDirection: 'row'
  },
  slider: {
    margin: 60
  },
  separator: {
    fontSize: 14,
    ...margin(5, 10, null)
  },
  text: {
    fontSize: 18
  },
  suffix: {
    fontSize: 14
  }
})
