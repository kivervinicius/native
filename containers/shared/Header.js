import UserNav from '@/containers/auth/Nav'
import Header from '@/components/shared/Header'

export default function HeaderApp(props) {
  return <Header {...props} auth={<UserNav navigation={props.navigation} />} />
}
