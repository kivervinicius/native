import {Platform} from 'react-native'
import styled from 'styled-components'

export default styled.View`
  margin-top: ${Platform.OS === 'ios' ? 20 : 0};
`
