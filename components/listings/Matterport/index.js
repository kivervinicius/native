import {WebView} from 'react-native'

export default function Matterport({code}) {
  const uri = `https://my.matterport.com/show/?m=${code}&play=1`
  return <WebView source={{uri}} />
}
