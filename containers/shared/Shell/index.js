import Shell, {Section, Footer} from '@/components/shared/Shell'
import Header from './Header'
import Navigation from './Navigation'

export default function ShellApp(props) {
  return <Shell {...props} />
}

ShellApp.defaultProps = {
  header: Header
}

export {Section, Header, Footer, Navigation}
