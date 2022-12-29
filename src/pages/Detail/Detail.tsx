import Loading from '@/components/Loading'
import NoData from '@/components/NoData'
import { useCountryDetail } from '@/hooks/query/backend-query'
import React from 'react'
import { Link, useParams } from 'react-router-dom'

export default function Home() {
  const { name } = useParams()

  const { isLoading, data, isError } = useCountryDetail(name as string)
  if (isLoading) return <Loading />
  if (!data || data.length < 1 || data.status) {
    return <NoData message="No data found!" />
  }

  let renderLanguages = null
  if (data[0].languages !== undefined) {
    renderLanguages = Object.keys(data[0].languages).map((key) => (
      <li key={key}>{data[0].languages[key]}</li>
    ))
  }

  console.log(data)
  return (
    <div>
      <Link to="/">Back</Link>
      <p>{data[0].name.common}</p>
      <p>{data[0].capital}</p>
      <p>
        <img src={data[0].flags.svg} alt={data[0].name.common} />
      </p>
      {renderLanguages && <p>{renderLanguages}</p>}
      <p>
        The country belongs to <b>{data[0].region}</b> region and{' '}
        <b>{data[0].subregion}</b> sub-region.
      </p>
      <p>
        Located at the <b>{data[0].latlng[0]}</b>&#176;N and{' '}
        <b>{data[0].latlng[1]}</b>&#176;W, the country has population of{' '}
        <b>{data[0].population}</b> and it has gained the independent, according
        to the CIA World FactBook.
      </p>
      <p>{data[0].timezones}</p>
    </div>
  )
}
