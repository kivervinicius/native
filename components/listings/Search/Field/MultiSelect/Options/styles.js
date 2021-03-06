import StyleSheet from '@/assets/StyleSheet'
import * as colors from '@/assets/colors'

export default StyleSheet({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderColor: colors.gray.$f0f0
  },
  text: {
    fontSize: 18,
    ':active': {
      color: colors.blue.medium
    }
  },
  icon: {
    fontSize: 20,
    color: colors.gray.lighter,
    ':active': {
      color: colors.blue.medium
    }
  }
})

export const highlightColor = colors.gray.$f0f0
