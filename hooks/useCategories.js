import useSWR from 'swr'

async function fetcher(url) {
  const res = await fetch(url)
  const json = await res.json()
  return json
}

export function useCategories() {
  const {data, error} = useSWR(`https://my.backend/categories`, fetcher)

  return {
    categories: data,
    isLoading: !error && !data,
    isError: error,
  }
}
