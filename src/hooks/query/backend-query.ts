import {
  fetchAllCountries,
  fetchCountryDetail,
} from '@/services/backend-service'
import { useQuery } from 'react-query'
import { QUERY_KEY } from '@/constants'

export const useFetchAllCountries = () => {
  const result = useQuery([QUERY_KEY.ALL_COUNTRIES], fetchAllCountries)
  return result
}

export const useCountryDetail = (name: string) => {
  const result = useQuery([QUERY_KEY.COUNTRY, name], () =>
    fetchCountryDetail(name)
  )
  return result
}
