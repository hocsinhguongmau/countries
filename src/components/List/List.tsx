import ListItem from '@/components/ListItem'
import { useFetchAllCountries } from '@/hooks/query/backend-query'
import Loading from '@/components/Loading'
import NoData from '@/components/NoData'
import { CountryType } from '@/types'
import { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import { useNumberOfItemStore, useSortStore } from '@/store'
import {
  filterCountries,
  sortNameAsc,
  sortNameDesc,
  sortPopulationAsc,
  sortPopulationDesc,
} from '@/services/frontend-service'
import { useSearchStore } from '@/store/search'

export default function List() {
  const { isLoading, data } = useFetchAllCountries()
  const { items } = useNumberOfItemStore()
  const { sort } = useSortStore()
  const { search } = useSearchStore()
  const [filterItems, setFilterItems] = useState<CountryType[]>([])
  const [sortedItems, setSortedItems] = useState<CountryType[]>([])
  const [currentItems, setCurrentItems] = useState<CountryType[]>([])
  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(0)

  //sort countries
  useEffect(() => {
    if (filterItems !== undefined) {
      console.log(filterItems)
      if (sort === 'name_desc') {
        setSortedItems(sortNameDesc(filterItems))
      } else if (sort === 'population_asc') {
        setSortedItems(sortPopulationAsc(filterItems))
      } else if (sort === 'population_desc') {
        setSortedItems(sortPopulationDesc(filterItems))
      } else {
        setSortedItems(sortNameAsc(filterItems))
      }
    }
  }, [filterItems, sort])

  //paging
  useEffect(() => {
    const endOffset = itemOffset + items
    if (sortedItems !== undefined) {
      setCurrentItems(sortedItems.slice(itemOffset, endOffset))
      setPageCount(Math.ceil(sortedItems.length / items))
    }
  }, [sortedItems, itemOffset, items])

  //filter countries
  useEffect(() => {
    if (data !== undefined && data.length > 0) {
      setFilterItems(filterCountries(data, search))
    }
  }, [data, search])

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * items) % sortedItems.length
    setItemOffset(newOffset)
  }

  const next = <span>»</span>
  const prev = <span>«</span>

  if (isLoading) return <Loading />
  if (!data || data.length < 1 || data.status) {
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
      {currentItems && currentItems.length > 0 ? (
        currentItems.map((item: CountryType) => (
          <ListItem key={item.name.common} {...item} />
        ))
      ) : (
        <NoData message="No country" />
      )}
      {sortedItems.length > items ? (
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
