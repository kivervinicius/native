import {StyleSheet} from 'react-native'

import {elevation} from '@/assets/styles'
import * as colors from '@/assets/colors'

export default StyleSheet.create({
  container: {
    margin: 10,
    borderRadius: 5,
    backgroundColor: 'white',
    ...elevation(4)
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },
  image: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },
  body: {
    padding: 20
  },
  address: {
    color: colors.gray.light,
    fontSize: 16,
    marginTop: 5
  },
  neighborhood: {
    fontWeight: '600'
  }
})
