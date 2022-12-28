import ListItem from '@/components/ListItem'
import { useFetchAllCountries } from '@/hooks/query/backend-query'
import Loading from '@/components/Loading'
import NoData from '@/components/NoData'
import { CountryType } from '@/types'
import { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'

type Props = {
  itemsPerPage: number
}

export default function List({ itemsPerPage }: Props) {
  const { isLoading, data } = useFetchAllCountries()

  const [currentItems, setCurrentItems] = useState<CountryType[]>([])
  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(0)

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage
    if (data !== undefined && data.length > 0) {
      setCurrentItems(data.slice(itemOffset, endOffset))
      setPageCount(Math.ceil(data.length / itemsPerPage))
    }
  }, [data, itemOffset, itemsPerPage])

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % data.length
    setItemOffset(newOffset)
  }

  const next = <span>»</span>
  const prev = <span>«</span>

  if (isLoading) return <Loading />
  if (!data || data.length < 1) {
    return <NoData message="No data found!" />
  }
  console.log(data)
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
      {data.length > itemsPerPage ? (
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
