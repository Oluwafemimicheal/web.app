import { FaBars } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";
import { IoRadio } from "react-icons/io5";
import { IoMdMusicalNotes } from "react-icons/io";
import { GrMultimedia } from "react-icons/gr";
import { FaRegUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div className="flex relative">
      <div className="bg-gray-800 absolute left-0 bottom-0 px-5 py-1 w-full">
        <ul className="flex justify-between items-center">
          <li className="hover:bg-white group rounded-md transition">
            <NavLink to="/"
              className={({ isActive }) => isActive ? "px-2 py-1 bg-white text-gray-950 flex flex-col justify-center items-center rounded-md transition" : " px-2 py-1 flex flex-col justify-center items-center text-white"
              } title="Today">
              <CiCalendar size={20} className={({ isActive }) => isActive ? "text-gray-950" : "text-white group-hover:text-gray-950"} />
              <small className={({ isActive }) => isActive ? "text-green-600 font-extrabold" : "text-white font-bold "}>Today</small>
            </NavLink>
          </li>
          <li className="hover:bg-white group rounded-md transition">
            <NavLink to="community"
              className={({ isActive }) => isActive ? "px-2 py-1 bg-white text-gray-950 flex flex-col justify-center items-center rounded-md transition" : " px-2 py-1 flex flex-col justify-center items-center text-white"
              } title="Community">
              <IoRadio size={20} className="group-hover:text-gray-950" />
              <small className={({ isActive }) => isActive ? "text-green-600 font-extrabold" : "text-white font-bold "}>Community</small>
            </NavLink>
          </li>
          <li className="px-4 py-1 hover:bg-white group rounded-md transition">
            <NavLink to={'community'} className="flex flex-col justify-center items-center">
              <IoMdMusicalNotes size={20} className="group-hover:text-gray-950" />
              <small className="text-white font-bold group-hover:text-gray-950">Community</small>
            </NavLink>
          </li>
          <li className="px-4 py-1 hover:bg-white group rounded-md transition">
            <NavLink to={'community'} className="flex flex-col justify-center items-center">
              <GrMultimedia size={20} className="group-hover:text-gray-950" />
              <small className="text-white font-bold group-hover:text-gray-950">Community</small>
            </NavLink>
          </li>
          <li className="px-4 py-1 hover:bg-white group rounded-md transition">
            <NavLink to={'community'} className="flex flex-col justify-center items-center">
              <FaRegUser size={20} className="group-hover:text-gray-950" />
              <small className="text-white font-bold group-hover:text-gray-950">Community</small>
            </NavLink>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default Menu;
