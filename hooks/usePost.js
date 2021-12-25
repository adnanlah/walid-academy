const {useState, useCallback} = require('react')

const useFetchData = ({url, payload, headers}) => {
  const [res, setRes] = useState({data: null, error: null, isLoading: false})
  const [error, setError] = useState(null)
  // You POST method here
  const callAPI = useCallback(pl => {
    setRes(prevState => ({...prevState, isLoading: true}))
    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(pl),
    }
    fetch(url, requestOptions)
      .then(response => {
        if (!response.ok) {
          console.log('response is not ok')
          return Promise.reject(response)
        }
        console.log('response is ok')
        response.json()
      })
      .then(json => {
        // all good, token is ready
        console.log('all good')
        setRes({data: json, isLoading: false, error: null})
      })
      .catch(response => {
        console.log('hook catch')
        console.log(response.status, response.statusCode, response.statusText)
        // 3. get error messages, if any
        response.json().then(json => {
          console.log('json: ', json)
          setRes({data: null, isLoading: false, error: json})
        })
      })
  }, [])
  return [res, callAPI]
}

// const MyFunc = () => {
//     const [res, apiMethod] = useFetchData({url: 'some url here', headers: {ContentType: 'text/plain'}, payload: {}});

//     return (
//        <button onClick={() => {apiMethod()}} type="button">Submit data</button>
//     )
//  }

export default useFetchData
