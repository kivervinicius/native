import {Component} from 'react'

import Logo from '@/components/shared/Logo'
import Container from './styles'

export default class Header extends Component {
  render() {
    return (
      <Container>
        <Logo height={40} />
      </Container>
    )
  }
}
