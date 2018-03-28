import StyleSheet from '@/assets/StyleSheet'
import * as colors from '@/assets/colors'

export default StyleSheet({
  container: {
    flex: 1,
    backgroundColor: 'white',
    position: 'relative'
  },
  main: {
    flex: 1,
    zIndex: 0
  },
  header: {
    margin: 0,
    width: '100%',
    ':overlay': {
      position: 'absolute',
      zIndex: 1
    }
  },
  nav: {
    flex: 0,
    width: '100%',
    zIndex: 1,
    backgroundColor: 'white',
    borderTopColor: colors.gray.light,
    borderTopWidth: 0.8
  }
})
