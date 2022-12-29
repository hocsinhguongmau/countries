import React from 'react'
import { FcGlobe } from 'react-icons/fc'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className="flex justify-center items-center px-4 py-2">
      <Link to="/">
        <FcGlobe className="text-6xl" data-cy="logo" />
      </Link>
    </div>
  )
}
