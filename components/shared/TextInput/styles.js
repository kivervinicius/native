import StyleSheet from '@/assets/StyleSheet'
import * as colors from '@/assets/colors'

export default StyleSheet({
  container: {
    fontSize: 18,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: colors.gray.light,
    color: colors.gray.dark,
    padding: 14,
    ':value': {
      borderColor: colors.blue.pastel
    }
  }
})
