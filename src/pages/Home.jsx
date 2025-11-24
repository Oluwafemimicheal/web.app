import { FaAccessibleIcon, FaBell, FaSun, FaAward } from "react-icons/fa"
import { BiMessageRounded } from "react-icons/bi";
import { SlLike } from "react-icons/sl";
import { MdOutlineShare } from "react-icons/md";
import { IoIosMore } from "react-icons/io";
import { NavLink } from "react-router-dom"
import HomeSection from "../components/HomeSection"

const Home = () => {
  return (
    <div className="flex flex-col gap-5 h-full overflow-auto">
      <div className="flex justify-left items-center">
        <div className="flex items-center gap-5 bg-gray-100 px-3 py-1 rounded-sm">
          <NavLink
            to="/"
            className={({ isActive }) => isActive ? "text-[18px] pb-0.5 border-b-2 border-sky-400 text-sky-400 del " : ""
            }
          >
            Today
          </NavLink>

          <NavLink
            to="bible"
            className={({ isActive }) => isActive ? "text-[18px] pb-0.5 border-b-2 border-sky-400 " : ""
            }
          >
            Bible
          </NavLink>
        </div>
      </div>
      <div className="flex gap-3 items-center text-gray-400 -mb-3">
      </div>
      <div className="w-full h-[350px] flex gap-5 rounded-lg overflow-hidden">
        <div className="w-[300px] h-[200px] bg-blue-400 rounded-md">
          <div className="flex items-center p-5 gap-1">
            <span><FaSun color="" size={30} /></span>
            <h1 className="text-gray-900 text-lg font-bold">Good Morning</h1>
          </div>
        </div>
        <div className="w-[300px] h-[200px] bg-orange-400  rounded-md"></div>
      </div>
      <HomeSection />
      <HomeSection />
    </div>
  )
}

export default Home
