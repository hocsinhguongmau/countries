import { useSearchStore } from '@/store/search'
import React from 'react'

export default function SearchBar() {
  const { setSearch } = useSearchStore()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  return (
    <input
      type="text"
      placeholder="Enter to search"
      className="outline-none border border-gray py-2 px-4 rounded"
      onChange={handleChange}
    />
  )
}
