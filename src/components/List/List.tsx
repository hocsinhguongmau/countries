import ListItem from '@/components/ListItem'
import { useFetchAllCountries } from '@/hooks/query/backend-query'
import Loading from '@/components/Loading'
import NoData from '@/components/NoData'
import { CountryType } from '@/types'
import { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import { useNumberOfItemStore, useSortStore } from '@/store'
import {
  sortNameAsc,
  sortNameDesc,
  sortPopulationAsc,
  sortPopulationDesc,
} from '@/services/frontend-service'

export default function List() {
  const { isLoading, data } = useFetchAllCountries()
  const { items } = useNumberOfItemStore()
  const { sort } = useSortStore()
  const [currentItems, setCurrentItems] = useState<CountryType[]>([])
  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(0)

  useEffect(() => {
    const endOffset = itemOffset + items
    if (data !== undefined && data.length > 0) {
      if (sort === 'name_desc') {
        setCurrentItems(sortNameDesc(data).slice(itemOffset, endOffset))
      } else if (sort === 'population_asc') {
        setCurrentItems(sortPopulationAsc(data).slice(itemOffset, endOffset))
      } else if (sort === 'population_desc') {
        setCurrentItems(sortPopulationDesc(data).slice(itemOffset, endOffset))
      } else {
        setCurrentItems(sortNameAsc(data).slice(itemOffset, endOffset))
      }
      setPageCount(Math.ceil(data.length / items))
    }
    console.log(currentItems[0]?.name?.common)
  }, [data, itemOffset, sort, items])

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * items) % data.length
    setItemOffset(newOffset)
  }

  const next = <span>»</span>
  const prev = <span>«</span>

  if (isLoading) return <Loading />
  if (!data || data.length < 1) {
    return <NoData message="No data found!" />
  }

  return (
    <>
      <div className="grid grid-cols-5 mt-8 px-4 py-4 font-bold bg-main text-white">
        <span>Flag</span>
        <span>Name</span>
        <span>Region</span>
        <span>Population</span>
        <span>Languages</span>
      </div>
      {currentItems &&
        currentItems.map((item: CountryType) => (
          <ListItem key={item.name.common} {...item} />
        ))}
      {data.length > items ? (
        <ReactPaginate
          breakLabel="..."
          nextLabel={next}
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel={prev}
          renderOnZeroPageCount={() => null}
          className="pagination"
        />
      ) : null}
    </>
  )
}
