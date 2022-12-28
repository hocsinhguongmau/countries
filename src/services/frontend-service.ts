import { CountryType } from '@/types'

export const sortNameAsc = (data: CountryType[]) => {
  return data.sort((a: CountryType, b: CountryType) => {
    if (a.name.common < b.name.common) {
      return -1
    }
    if (a.name.common > b.name.common) {
      return 1
    }
    return 0
  })
}

export const sortNameDesc = (data: any) => {
  return data.sort((a: CountryType, b: CountryType) => {
    if (a.name.common < b.name.common) {
      return 1
    }
    if (a.name.common > b.name.common) {
      return -1
    }
    return 0
  })
}

export const sortPopulationAsc = (data: CountryType[]) => {
  return data.sort((a: CountryType, b: CountryType) => {
    if (a.population < b.population) {
      return -1
    }
    if (a.population > b.population) {
      return 1
    }
    return 0
  })
}

export const sortPopulationDesc = (data: any) => {
  return data.sort((a: CountryType, b: CountryType) => {
    if (a.population < b.population) {
      return 1
    }
    if (a.population > b.population) {
      return -1
    }
    return 0
  })
}
