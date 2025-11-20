import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Verse = () => {
  const {id} = useParams()
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {

    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await axios.get(`https://rest.api.bible/v1/bibles/de4e12af7f28f599-02/books/${id}/chapters`, {
          headers: {
            "api-key": "c9aRJGVRB31heN6G6R0ll",
            Accept: "application/json"
          }
        })

        setData(response.data.data)
        setLoading(false)
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()

  }, [])
  return (
    <ul className='flex flex-wrap gap-3'>
      <h1>{loading && "Loading..."}</h1>
      {data?.map((verse) =>(
        <li key={verse?.id} className='border-2 p-2 rounded-sm'>{verse.id}</li>
      ))}
    </ul>
  )
}

export default Verse
