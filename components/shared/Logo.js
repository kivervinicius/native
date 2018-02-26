import {Image} from 'react-native'

export default function Logo(props) {
  return <Image {...props} source={require('@/assets/img/logo.png')} />
}
