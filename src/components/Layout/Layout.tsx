import React from 'react'
import Header from '@/components/Header'
type Props = {
  children: JSX.Element
}

export default function Layout({ children }: Props) {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}
