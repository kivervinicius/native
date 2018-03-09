import Shell from '@/containers/shared/Shell'
import Search from '@/components/listings/Search'
import Listings from '@/containers/listings/Feed'

export default function ListingsScreen() {
  return (
    <Shell>
      <Listings type="search" />
    </Shell>
  )
}

export const screen = ListingsScreen

export const navigationProps = () => ({
  title: 'EmCasa | Pesquisa',
  header: <Search />
})
