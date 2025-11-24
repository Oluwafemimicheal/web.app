import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import Spinner from './Spinner'

const Verse = () => {
  const { id } = useParams()
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
      <div className={loading ? 'w-full h-[500px] flex justify-center items-center' : null}>{loading && <div><Spinner /></div>}</div>
      {data?.map((verse) => (
        <Link to={`verse/${verse?.id}`} key={verse?.id}>
          <li className='border-2 p-2 rounded-sm'>{verse?.id}</li>
        </Link>
      ))}
    </ul>
  )
}

export default Verse
