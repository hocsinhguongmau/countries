import React, { useState } from 'react'

export default function SearchBar() {
  const [keyword, setKeyword] = useState<string>('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(keyword)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter to search"
        className="outline-none border border-gray py-2 px-4 rounded"
        onChange={handleChange}
      />
    </form>
  )
}
