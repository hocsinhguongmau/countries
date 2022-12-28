import Header from '@/components/Header'
import List from '@/components/List'
import SearchBar from '@/components/SearchBar'
import Sort from '@/components/Sort'
import React from 'react'

export default function Home() {
  return (
    <>
      <div className="flex justify-between items-center">
        <SearchBar />
        <Sort />
      </div>
      <List />
    </>
  )
}
