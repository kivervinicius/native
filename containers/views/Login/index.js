import Shell from '@/components/shared/Shell'
import LoginForm from '@/containers/auth/LoginForm'

export default function LoginScreen() {
  return (
    <Shell>
      <LoginForm />
    </Shell>
  )
}

export const screen = LoginScreen

export const navigationProps = () => ({
  title: 'EmCasa | Login'
})
