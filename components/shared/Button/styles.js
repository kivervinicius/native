import StyleSheet from '@/assets/StyleSheet'
import * as colors from '@/assets/colors'

export default StyleSheet({
  container: {
    padding: 8,
    backgroundColor: colors.blue.medium,
    borderWidth: 1,
    borderColor: colors.blue.light,
    borderRadius: 5
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    color: 'white',
    marginBottom: 2
  }
})
