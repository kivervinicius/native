import {Component, Fragment} from 'react'
import {StatusBar, SafeAreaView} from 'react-native'

import Logo from '@/components/shared/Logo'
import styles from './styles'

export default class Header extends Component {
  render() {
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
          <Logo height={40} />
        </SafeAreaView>
      </Fragment>
    )
  }
}
