import {Component} from 'react'
import {connect} from 'react-redux'

import {getUser} from '@/redux/modules/auth/selectors'
import Shell from '@/containers/shared/Shell'
import LoginForm from '@/containers/auth/LoginForm'

class BaseLoginScreen extends Component {
  componentWillReceiveProps({user, navigation}) {
    // Return to homepage on success
    if (user !== this.props.user && user) {
      navigation.navigate('home')
    }
  }

  render() {
    return (
      <Shell>
        <LoginForm />
      </Shell>
    )
  }
}

const props = (state) => ({
  user: getUser(state)
})

const LoginScreen = connect(props)(BaseLoginScreen)

export default LoginScreen

export const screen = LoginScreen

export const navigationProps = () => ({
  title: 'EmCasa | Login'
})
