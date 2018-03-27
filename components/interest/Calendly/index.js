import {WebView, StyleSheet} from 'react-native'

const URL = 'https://calendly.com/em-casa'

export default function Calendly() {
  return <WebView source={{uri: URL}} style={StyleSheet.absoluteFill} />
}
