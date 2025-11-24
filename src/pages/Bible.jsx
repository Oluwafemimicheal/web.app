import { Link, NavLink } from "react-router-dom"
import { FaAccessibleIcon, FaBell } from "react-icons/fa"
import { useEffect, useState } from "react"
import axios from "axios"
import Spinner from "../components/Spinner"
const Bible = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {

    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await axios.get('https://rest.api.bible/v1/bibles/de4e12af7f28f599-02/books', {
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
    <div className="flex flex-col gap-3 h-full overflow-auto px-2">
      <div className="flex justify-start items-center w-max">
        <div className="flex items-center gap-5 py-1 rounded-sm">
          <NavLink
            to="/"
            className={({ isActive }) => isActive ? "pb-0.5 border-b-2 border-blue-800 " : ""
            }
          >
            Today
          </NavLink>
          <NavLink
            to="/bible"
            className={({ isActive }) => isActive ? "pb-0.5 border-b-2 border-orange-800 text-orange-800 " : ""
            }
          >
            Bible
          </NavLink>

        </div>
      </div>
      <div className="flex justify-between items-center">
        <h2 className="mb-2 font-bold text-gray-800">Bible Chapters</h2>
        <h1 className=" p-2 text-amber-700 font-bold">
          KJV
        </h1>

      </div>
      <ul>
        <div className={loading ? 'w-full h-screen flex justify-center items-center' : null}>{loading && <div><Spinner /></div>}</div>
        {
          data.map((chapter) => (
            <Link to={`/chapter/${chapter?.id}`} key={chapter?.id}>
              <li className="flex gap-20 pl-2 py-1 border-b border-gray-400 ">
                <h1 className="w-30 md:w-50 text-[14px]">{chapter?.name}</h1>
              </li>
            </Link>
          ))
        }
      </ul>

    </div>
  )
}

export default Bible
