import Shell, {Section} from '@/components/shared/Shell'
import Header from './Header'
import Navigation from './Navigation'

export default function ShellApp(props) {
  return <Shell {...props} />
}

ShellApp.defaultProps = {
  get header() {
    return <Header />
  },
  get footer() {
    return <Navigation />
  }
}

export {Section}
