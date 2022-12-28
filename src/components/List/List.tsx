import ListItem from '@/components/ListItem'
import { useFetchAllCountries } from '@/hooks/query/backend-query'
import Loading from '@/components/Loading'
import NoData from '@/components/NoData'
import { CountryType } from '@/types'

export default function List() {
  const { isLoading, data } = useFetchAllCountries()

  if (isLoading) return <Loading />
  if (!data || data.length < 1) {
    return <NoData />
  }
  console.log(data[0])
  return (
    <>
      <div className="grid grid-cols-5 mt-8 px-4 py-4 font-bold bg-main text-white">
        <span>Flag</span>
        <span>Name</span>
        <span>Region</span>
        <span>Population</span>
        <span>Languages</span>
      </div>
      {data.splice(0, 5).map((item: CountryType) => (
        <ListItem key={item.name.common} {...item} />
      ))}
    </>
  )
}
