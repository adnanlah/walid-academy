import useSWR from 'swr'

export function useDvisions() {
  const {data, error} = useSWR(`https://my.backend/divisions`)

  return {
    categories: data,
    isLoading: !error && !data,
    isError: error,
  }
}
