import StyleSheet from '@/assets/StyleSheet'
import {padding} from '@/assets/styles'

export default StyleSheet({
  container: {
    flex: null
  },
  slide: {
    ':raised': padding(10)
  }
})

export const cardStyles = StyleSheet({
  container: {
    borderRadius: 0,
    ':raised': {borderRadius: 5}
  },
  body: {
    padding: 0
  }
})
