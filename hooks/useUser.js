import useSWR from 'swr'
export function useUser(id) {
  const {data, error} = useSWR(`https://my.backend/user/${id}`)

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  }
}
