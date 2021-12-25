const {useState, useCallback} = require('react')

const useFetch = ({url}) => {
  const [res, setRes] = useState({data: null, error: null, isLoading: false})

  const callAPI = useCallback(
    requestOptions => {
      setRes(s => ({...s, isLoading: true}))
      fetch(url, requestOptions)
        .then(response => {
          if (!response.ok) {
            return Promise.reject(response)
          }
          response.json()
        })
        .then(json => {
          // all good, token is ready
          setRes({data: json, isLoading: false, error: null})
        })
        .catch(response => {
          console.log(response.status, response.statusText)
          // 3. get error messages, if any
          response.json().then(json => {
            setRes({data: null, isLoading: false, error: json})
          })
        })
    },
    [url],
  )
  return [res, callAPI]
}

export default useFetch
