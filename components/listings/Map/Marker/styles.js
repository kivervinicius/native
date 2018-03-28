import StyleSheet from '@/assets/StyleSheet'
import * as colors from '@/assets/colors'
import {elevation, padding} from '@/assets/styles'

export default StyleSheet({
  container: {
    position: 'relative',
    ...elevation(2)
  },
  body: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: 7,
    backgroundColor: colors.blue.medium,
    width: 50,
    ...padding(3.5, null),
    zIndex: 1,
    ':icon': {
      width: 30
    }
  },
  text: {
    color: 'white',
    fontWeight: '600',
    ':icon': {
      fontSize: 17
    }
  },
  tip: {
    zIndex: -1,
    position: 'absolute',
    width: 12,
    height: 16,
    left: '50%',
    bottom: -7,
    backgroundColor: colors.blue.medium,
    borderRadius: 2,
    transform: [{rotate: '45deg'}, {translateX: -6}]
  }
})
