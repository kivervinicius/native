import Shell, {Section} from '@/components/shared/Shell'
import Header from './Header'

export default function ShellApp(props) {
  return <Shell {...props} />
}

ShellApp.defaultProps = {
  header: Header
}

export {Section}
