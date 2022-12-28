import React from 'react'

import { useNumberOfItemStore, useSortStore } from '@/store'

export default function Sort() {
  const { setSort } = useSortStore()
  const { setItems } = useNumberOfItemStore()

  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(e.target.value)
  }

  const handleNumberOfItems = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setItems(parseInt(e.target.value))
  }

  return (
    <div className="flex gap-2">
      <label htmlFor="sort">Sort by</label>
      <select
        name="sort"
        id="sort"
        className="outline-none border border-gray rounded"
        onChange={handleSort}
      >
        <option value="name_asc">Name asc</option>
        <option value="name_desc">Name desc</option>
        <option value="population_asc">Population asc</option>
        <option value="population_desc">Population desc</option>
      </select>
      <label htmlFor="itemsPerPage" className="ml-4 inline-block">
        Number of items
      </label>
      <select
        name="itemsPerPage"
        id="itemsPerPage"
        className="outline-none border border-gray rounded"
        onChange={handleNumberOfItems}
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
      </select>
    </div>
  )
}
