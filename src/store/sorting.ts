import { NumberOfItems, SortType } from '@/types/SortType'
import create from 'zustand'

export const useSortStore = create<SortType>((set) => ({
  sort: 'name_asc',
  setSort: (method) => set(() => ({ sort: method })),
}))

export const useNumberOfItemStore = create<NumberOfItems>((set) => ({
  items: 5,
  setItems: (quantity) => set(() => ({ items: quantity })),
}))
