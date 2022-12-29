import { debounce } from '@/services/frontend-service'
import { useSearchStore } from '@/store/search'
import React from 'react'

export default function SearchBar() {
  const { setSearch } = useSearchStore()

  const SearchCountries = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }
  const handleChange = debounce(SearchCountries, 300)

  return (
    <input
      type="text"
      placeholder="Enter to search"
      className="outline-none border border-gray py-2 px-4 rounded"
      onChange={handleChange}
      data-cy="search-input"
    />
  )
}
