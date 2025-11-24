import { Link, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"

const Section = () => {
   const { id, chapterId } = useParams()
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
  
      const fetchData = async () => {
        try {
          setLoading(true)
          const response = await axios.get(`https://rest.api.bible/v1/bibles/de4e12af7f28f599-02/books/${id}/chapters/${chapterId}/sections`, {
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
    <div>
      {loading&&"Loading verse..."}
      {
        data.map((verse)=>(
          <h5>{verse}</h5>
        ))
      }
    </div>
  )
}

export default Section
