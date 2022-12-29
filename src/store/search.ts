import { SearchType } from '@/types/SearchType'
import create from 'zustand'

export const useSearchStore = create<SearchType>((set) => ({
  search: '',
  setSearch: (key) => set(() => ({ search: key })),
}))
