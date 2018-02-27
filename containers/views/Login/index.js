import LoginForm from '@/containers/auth/LoginForm'

export default function LoginScreen() {
  return <LoginForm />
}

export const screen = LoginScreen

export const navigationProps = () => ({
  title: 'EmCasa | Login'
})
