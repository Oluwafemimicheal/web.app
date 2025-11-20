import { FaAccessibleIcon, FaBell, FaSun, FaAward } from "react-icons/fa"
import { BiMessageRounded } from "react-icons/bi";
import { SlLike } from "react-icons/sl";
import { MdOutlineShare } from "react-icons/md";
import { IoIosMore } from "react-icons/io";
import { NavLink } from "react-router-dom"
import HomeSection from "../components/HomeSection"

const Home = () => {
  return (
    <div className="flex flex-col gap-5 pb-10 h-full overflow-auto">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-5">
          <NavLink
            to="/"
            className={({ isActive }) => isActive ? "text-[18px] pb-1 border-b-2 border-sky-600 " : ""
            }
          >
            Today
          </NavLink>

          <NavLink
            to="bible"
            className={({ isActive }) => isActive ? "text-[18px] pb-1 border-b-2 border-sky-600 " : ""
            }
          >
            Bible
          </NavLink>
        </div>
        <div className="flex gap-5">
          <FaAward size={20} />
          <FaBell size={20} />
        </div>

      </div>
      <div className="flex gap-3 items-center text-gray-400 -mb-3">

        <div className="flex items-center gap-1">
          <span><FaSun /></span>
          <h1>{new Date().toLocaleTimeString()? "Good Morning" : "Good Evening"}</h1>
        </div>
      </div>
      <div className="w-full h-[400px] rounded-lg bg-gray-800 hero-section overflow-hidden">
        <div className="w-full h-full bg-black/50 flex flex-col justify-between gap-4 p-5">
          <div className="flex justify-between  pb-1">
            <div className="flex flex-col ">
              <div className="flex gap-1 font-bold">
              <span>Matthew</span> <span>4:16</span></div>
              <p className="text-sm text-gray-400">Verse of the day</p>
              </div>
            <span className="font-bold">NKJV</span>
          </div>
          <div className="font-bold text-2xl">
            The people who sat in darkness have seen a great light, and upon those who sat in the region and shadow of death, light has dawned.

          </div>
          <div className="flex justify-between items-center h-[50px]">
            <SlLike size={26} className="hover:text-blue-500 cursor-pointer" />
            <BiMessageRounded size={26} className="hover:text-blue-500 cursor-pointer" />
            <MdOutlineShare size={26} className="hover:text-blue-500 cursor-pointer" />
            <IoIosMore size={26} className="hover:text-blue-500 cursor-pointer" />
          </div>
        </div>
      </div>
      <HomeSection />
      <HomeSection />
      <HomeSection />
      <HomeSection />

    </div>
  )
}

export default Home
