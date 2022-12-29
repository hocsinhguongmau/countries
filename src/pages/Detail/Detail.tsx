import Loading from '@/components/Loading'
import NoData from '@/components/NoData'
import { useCountryDetail } from '@/hooks/query/backend-query'
import { Link, useParams } from 'react-router-dom'
import { GrNext } from 'react-icons/gr'
import GoogleMapReact from 'google-map-react'

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
  const defaultProps = {
    center: {
      lat: data[0].latlng[0],
      lng: data[0].latlng[1],
    },
    zoom: 6,
  }
  return (
    <div className="grid grid-cols-2 gap-4 mt-8">
      <div>
        <p className="flex gap-2 items-center">
          <Link to="/" className="font-bold hover:text-main">
            Home
          </Link>
          <GrNext /> {data[0].name.common}
        </p>

        <h1 className="text-4xl font-bold text-main mt-8" data-cy="title">
          {data[0].name.common}
        </h1>
        <p className="mt-2 text-secondary text-xl" data-cy="capital">
          Capital: {data[0].capital}
        </p>
        <p className="mt-4">
          <img
            src={data[0].flags.svg}
            alt={data[0].name.common}
            width={200}
            height={100}
            className="border border-gray"
            data-cy="flag"
          />
        </p>
        <div>
          <p className="mt-4" data-cy="area">
            <b>Total area:</b> {data[0].area}
          </p>
          <p className="mt-2" data-cy="population">
            <b>Population:</b> {data[0].population}
          </p>
          <p className="flex gap-2 mt-2" data-cy="languages">
            <b>Languages: </b>
            {renderLanguages && (
              <ul className="list-disc list-inside">{renderLanguages}</ul>
            )}
          </p>
          <div className="mt-2 flex gap-2" data-cy="geography">
            <b>Geography:</b>
            <div>
              <p>
                The country belongs to <b>{data[0].region}</b> region and{' '}
                <b>{data[0].subregion}</b> sub-region.
              </p>
              <p>
                Located at the <b>{data[0].latlng[0]}</b>&#176;N and
                <b> {data[0].latlng[1]}</b>&#176;W
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full" data-cy="map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: '' }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        />
      </div>
    </div>
  )
}
