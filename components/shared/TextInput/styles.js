import StyleSheet from '@/assets/StyleSheet'
import * as colors from '@/assets/colors'

export default StyleSheet({
  container: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: colors.gray.light,
    borderRadius: 4,
    padding: 14,
    ':value': {
      borderColor: colors.blue.pastel
    }
  }
})
