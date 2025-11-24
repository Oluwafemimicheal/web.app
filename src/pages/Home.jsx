import { FaAccessibleIcon, FaBell, FaSun, FaAward } from "react-icons/fa"
import { BiMessageRounded } from "react-icons/bi";
import { SlLike } from "react-icons/sl";
import { MdOutlineShare } from "react-icons/md";
import { IoIosMore } from "react-icons/io";
import { NavLink } from "react-router-dom"
import HomeSection from "../components/HomeSection"

const Home = () => {
  return (
    <div className="flex flex-col gap-5 h-full px-2 overflow-hidden">
      <div className="flex justify-left items-center">
        <div className="flex items-center gap-5 py-1 rounded-sm">
          <NavLink
            to="/"
            className={({ isActive }) => isActive ? "pb-0.5 border-b-2 border-blue-800 text-sky-800 del " : ""
            }
          >
            Today
          </NavLink>

          <NavLink
            to="bible"
            className={({ isActive }) => isActive ? "pb-0.5 border-b-2 border-sky-400 " : ""
            }
          >
            Bible
          </NavLink>
        </div>
      </div>

      <div className="w-full h-[350px] flex flex-col gap-3 rounded-lg overflow-hidden">
        <div className="flex gap-3">
          <div className="w-[300px] h-[150px] bg-blue-400 rounded-md">
            <div className="flex items-center p-5 gap-1">
              <span><FaSun color="" size={20} /></span>
              <h1 className="text-gray-900  font-bold">Good Morning</h1>
            </div>
          </div>
          <div className="w-[300px] h-[150px] p-5 bg-orange-400  rounded-md">
            <h1 className="font-semibold md:text-2xl">The Big Picture of God</h1>
          </div>

        </div>
        <div className="flex flex-col gap-3">
          <div className="w-full h-auto bg-blue-400 rounded-md">
            <div className="flex flex-col p-5 gap-1">
              <h1 className="text-gray-900 mb-3 font-bold">Bible Daily Word</h1>
              <p>The LORD is my strength and my shield; my heart trusts in Him, and I am helped. <br></br> <span className="text-gray-800 font-semibold">This verse connects God's strength with protection and the resulting joy and thankfulness of the believer</span></p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 pt-4">
        <h1 className="font-semibold text-gray-700">Bible Podcast</h1>
        <div className="flex gap-3">
          <div className="w-[150px] h-[100px] p-2 bg-blue-400 rounded-md overflow-hidden overflow-x-auto ">
            <p>the <br /> <span className="font-semibold">Bible Teaching</span><br /> podcast</p>
          </div>
          <div className="w-[150px] h-[100px] p-2 bg-amber-500 rounded-md overflow-hidden overflow-x-auto">
            <p>the <br /> <span className="font-semibold">Bible Teaching</span><br /> podcast</p>
          </div>
          <div className="w-[150px] h-[100px] p-2 bg-amber-500 rounded-md overflow-hidden overflow-x-auto">
            <p>the <br /> <span className="font-semibold">Bible Teaching</span><br /> podcast</p>
          </div>
          <div className="w-[150px] h-[100px] p-2 bg-blue-400 rounded-md overflow-hidden overflow-x-auto">
            <p>the <br /> <span className="font-semibold">Bible Teaching</span><br /> podcast</p>
          </div>

        </div>


      </div>
      <div className="flex flex-col gap-3 pt-4">
        <h1 className="font-semibold text-gray-700">Bible Teachings & Sermon</h1>
        <div className="flex gap-3">
          <div className="w-[150px] h-[100px] p-2 bg-blue-400 rounded-md overflow-hidden overflow-x-auto ">
            <p>the <br /> <span className="font-semibold">Bible Teaching</span><br /> podcast</p>
          </div>
          <div className="w-[150px] h-[100px] p-2 bg-amber-500 rounded-md overflow-hidden overflow-x-auto">
            <p>the <br /> <span className="font-semibold">Bible Teaching</span><br /> podcast</p>
          </div>
          <div className="w-[150px] h-[100px] p-2 bg-amber-500 rounded-md overflow-hidden overflow-x-auto">
            <p>the <br /> <span className="font-semibold">Bible Teaching</span><br /> podcast</p>
          </div>
          <div className="w-[150px] h-[100px] p-2 bg-blue-400 rounded-md overflow-hidden overflow-x-auto">
            <p>the <br /> <span className="font-semibold">Bible Teaching</span><br /> podcast</p>
          </div>

        </div>


      </div>
      <div className="flex flex-col gap-3">
        <HomeSection title={'The Bible Journey'} desc={'the way and the light'} />
        <HomeSection title={'Building intimacy'} desc={'the heart of real relationship with God'} />
      </div>

    </div>
  )
}

export default Home
