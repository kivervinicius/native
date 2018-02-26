import {Component} from 'react'
import {StatusBar, SafeAreaView} from 'react-native'

import Logo from '@/components/shared/Logo'
import Container from './styles'

export default class Header extends Component {
  render() {
    return (
      <SafeAreaView>
        <StatusBar barStyle="dark-content" />
        <Container>
          <Logo height={40} />
        </Container>
      </SafeAreaView>
    )
  }
}
