import {WebView, View, Platform} from 'react-native'
import WebkitView from 'react-native-webkit-webview'

import styles from './styles'

const WebGlView = Platform.select({
  ios: WebView,
  android: WebkitView
})

export default function Matterport({children, code, play, width, height}) {
  let uri = `https://my.matterport.com/show?play=0&m=${code}`
  if (play) uri += '&play=1'
  const display = {width, height}
  return (
    <View style={[styles.container, display]}>
      {code && (
        <View style={styles.content}>
          <WebGlView source={{uri}} style={[styles.webview, display]} />
        </View>
      )}
      <View style={[styles.fallback, display]}>{children}</View>
    </View>
  )
}

Matterport.defaultProps = {
  play: false,
  width: '100%',
  height: '100%'
}
