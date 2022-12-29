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

export const sortNameDesc = (data: CountryType[]) => {
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

export const sortPopulationDesc = (data: CountryType[]) => {
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

export const filterCountries = (data: CountryType[], keyword: string) => {
  return data.filter((item: any) =>
    item.name.common.toLowerCase().includes(keyword.toLowerCase())
  )
}

export const debounce = <F extends (...params: any[]) => void>(
  func: F,
  timeout: number
) => {
  let timer: ReturnType<typeof setTimeout>
  return (...args: any[]) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, timeout)
  }
}
