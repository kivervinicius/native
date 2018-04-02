import StyleSheet from '@/assets/StyleSheet'
import * as colors from '@/assets/colors'
import {margin} from '@/assets/styles'

export default StyleSheet({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    ...margin(10, 20)
  }
})

export const button = StyleSheet({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: colors.gray.medium,
    ...margin(null, 10, 15)
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.gray.medium
  }
})
