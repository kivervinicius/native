import Shell from '@/containers/shared/Shell'
import Search from '@/containers/listings/Search'
import Listings from '@/containers/listings/Feed'

export default function ListingsScreen() {
  return <Shell>{/* <Listings type="search" /> */}</Shell>
}

export const screen = ListingsScreen

export const navigationOptions = () => ({
  title: 'EmCasa | Pesquisa',
  header: (props) => <Search onSubmit={console.log} {...props} />
})
