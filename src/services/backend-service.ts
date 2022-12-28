import { BACKEND_API_URL } from '@/constants'

export const fetchAllCountries = async () => {
  const result = await fetch(`${BACKEND_API_URL}/all`)
  const jsonResult = await result.json()
  return jsonResult
}

export const fetchCountryDetail = async (name: string) => {
  const result = await fetch(`${BACKEND_API_URL}/name/${name}`)
  const jsonResult = await result.json()
  return jsonResult
}

export const fetchCountriesByKeyword = async (keyword: string) => {
  const result = await fetch(`${BACKEND_API_URL}/name/${keyword}`)
  const jsonResult = await result.json()
  return jsonResult
}
