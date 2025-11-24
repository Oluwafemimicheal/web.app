import { useState, useEffect } from "react"


const useFetch = ({url}) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  useEffect(() => {

    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await axios.get(`https://rest.api.bible/v1/bibles/de4e12af7f28f599-02/books/${url}`, {
          headers: {
            "api-key": "c9aRJGVRB31heN6G6R0ll",
            Accept: "application/json"
          }
        })
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        setData(response.data.data)
        setLoading(false)
        console.log(response)
      } catch (error) {
        setError(err.message);
      }
    }

    fetchData()

  }, [url])
  return {loading, data, error }
}

export default useFetch
