export type CountryType = {
  flags: { svg: string }
  name: { common: string }
  region: string
  population: number
  languages: { [key: string]: [value: string] }
}
