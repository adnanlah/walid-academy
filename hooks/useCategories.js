import useSWR from 'swr'

export function useCategories() {
  const {data, error} = useSWR(`https://my.backend/categories`)

  return {
    categories: data,
    isLoading: !error && !data,
    isError: error,
  }
}
