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
      <div className="bg-gray-800 absolute left-0 bottom-0 px-5 py-2 w-full">
        <ul className="flex justify-between items-center">
          <li className="px-4 py-1 hover:bg-white group rounded-md transition">
            <NavLink to="/"
              className={({ isActive }) => isActive ? " px-4 py-1 bg-white group rounded-md text-gray-950 flex flex-col justify-center items-center " : "flex flex-col justify-center items-center"
              } title="Today">
              <CiCalendar size={25} className="group-hover:text-gray-950" />
              <small className="text-white font-bold group-hover:text-gray-950">Today</small>
            </NavLink>
          </li>
          <li className="px-4 py-1 hover:bg-white group rounded-md transition">
            <NavLink to={'community'} className="flex flex-col justify-center items-center">
              <IoRadio size={25} className="group-hover:text-gray-950" />
              <small className="text-white font-bold group-hover:text-gray-950">Community</small>
          </NavLink>
          </li>
          <li className="px-4 py-1 hover:bg-white group rounded-md transition">
            <NavLink to={'community'} className="flex flex-col justify-center items-center">
              <IoMdMusicalNotes size={25} className="group-hover:text-gray-950" />
              <small className="text-white font-bold group-hover:text-gray-950">Community</small>
            </NavLink>
          </li>
          <li className="px-4 py-1 hover:bg-white group rounded-md transition">
            <NavLink to={'community'} className="flex flex-col justify-center items-center">
              <GrMultimedia size={25} className="group-hover:text-gray-950" />
              <small className="text-white font-bold group-hover:text-gray-950">Community</small>
            </NavLink>
          </li>
          <li className="px-4 py-1 hover:bg-white group rounded-md transition">
            <NavLink to={'community'} className="flex flex-col justify-center items-center">
              <FaRegUser size={25} className="group-hover:text-gray-950" />
              <small className="text-white font-bold group-hover:text-gray-950">Community</small>
            </NavLink>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default Menu;
