import StyleSheet from '@/assets/StyleSheet'
import * as colors from '@/assets/colors'

export default StyleSheet({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  main: {
    flex: 1
  },
  header: {
    margin: 0
  },
  nav: {
    flex: 0,
    width: '100%',
    backgroundColor: 'white',
    borderTopColor: colors.gray.light,
    borderTopWidth: StyleSheet.hairlineWidth
  }
})
