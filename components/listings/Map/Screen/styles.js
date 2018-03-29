import {StyleSheet} from 'react-native'

import * as colors from '@/assets/colors'
import {elevation, padding} from '@/assets/styles'

export default StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1
  },
  body: {
    flex: 1,
    zIndex: 0
  },
  buttonWrapper: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    zIndex: 1
  },
  button: {
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
  buttonText: {
    fontSize: 14,
    color: colors.blue.medium
  },
  buttonIcon: {
    fontSize: 25,
    marginLeft: -5,
    color: colors.blue.medium
  }
})
