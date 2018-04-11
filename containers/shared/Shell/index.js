import Lock from '@/containers/shared/Orientation/Locked'
import Shell, {Section, Footer} from '@/components/shared/Shell'
import Header from './Header'
import Navigation from './Navigation'

export default function ShellApp({lock, ...props}) {
  const children = <Shell {...props} />
  return <Lock to={lock}>{children}</Lock>
}

ShellApp.defaultProps = {
  lock: 'portrait',
  header: Header
}

export {Section, Header, Footer, Navigation}
