import { NavLink } from "react-router-dom"
import { FaAccessibleIcon, FaBell, FaPlay } from "react-icons/fa"
import Song from "../components/Song";

const Radio = () => {
  return (
    <div className="flex flex-col gap-5 px-2 h-full">
      <div className="flex justify-start items-center gap-1">
        <div className="w-2.5 h-2.5 bg-green-600 rounded-full ">
          <div className="w-2.5 h-2.5 bg-green-600 rounded-full animate-ping">
          </div>
        </div>
        <small>Live Sermon</small>
      </div>
      <div>
        <h3 className="font-bold text-2xl">The Morning Radio Show with Pst Abraham Arigi</h3>
      </div>
      <div className="flex justify-between gap-4 w-full h-[100px] p-3 rounded-lg bg-gray-800 shadow-md shadow-black/30">
      </div>
      <div>
        <small className="text-gray-400 font-bold">Message Play List</small>
        <ul className="mt-3 flex flex-col gap-3">
          <Song />
          <Song />
          <Song />
          <Song />
          <Song />
          <Song />

        </ul>
      </div>

    </div>
  )
}

export default Radio;
