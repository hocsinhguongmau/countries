import { CountryType } from '@/types'
import { Link } from 'react-router-dom'

export default function ListItem({
  flags,
  name,
  region,
  population,
  languages,
}: CountryType) {
  const renderLanguages = Object.keys(languages).map((key) => (
    <li key={key}>{languages[key]}</li>
  ))

  return (
    <Link
      to={`/country/${name.common}`}
      className="grid grid-cols-5 px-4 py-2 hover:bg-secondary hover:text-white items-center border-b border-l border-r border-gray odd:bg-red-100"
    >
      <div>
        <img src={flags.svg} alt={name.common} width={100} height={50} />
      </div>
      <div>{name.common}</div>
      <div>{region}</div>
      <div>{population}</div>
      <div>
        <ul className="list-disc list-inside">{renderLanguages}</ul>
      </div>
    </Link>
  )
}
