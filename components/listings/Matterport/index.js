import {WebView, Platform} from 'react-native'
import WebkitView from 'react-native-webkit-webview'

const WebGlView = Platform.select({
  ios: WebView,
  android: WebkitView
})

export default function Matterport({code}) {
  const uri = `https://my.matterport.com/show/?m=${code}&play=1`
  return (
    <WebGlView
      source={{uri}}
      style={{flex: 1, width: '100%', height: '100%'}}
    />
  )
}
