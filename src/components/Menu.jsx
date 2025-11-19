import { FaBars } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";
import { IoRadio } from "react-icons/io5";
import { IoMdMusicalNotes } from "react-icons/io";
import { GrMultimedia } from "react-icons/gr";
import { FaRegUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div className="w-full flex relative px-2">
      <div className="bg-gray-800 py-2 px-2 w-full rounded-lg">
        <ul className="flex justify-between items-center">
          <li className="hover:bg-white group rounded-md transition">
            <NavLink to="/"
              className={({ isActive }) => isActive ? "px-2 py-1 bg-white text-gray-950 flex flex-col justify-center items-center rounded-md transition" : " px-2 py-1 flex flex-col justify-center items-center text-white"
              } title="Today">
              <CiCalendar size={18} className={({ isActive }) => isActive ? "text-gray-950" : "text-white group-hover:text-gray-950"} />
              <small className={({ isActive }) => isActive ? "text-green-600 font-extrabold" : "text-white font-bold "}>Today</small>
            </NavLink>
          </li>
          <li className="hover:bg-white group rounded-md transition">
            <NavLink to="community"
              className={({ isActive }) => isActive ? "px-2 py-1 bg-white text-gray-950 flex flex-col justify-center items-center rounded-md transition" : " px-2 py-1 flex flex-col justify-center items-center text-white"
              } title="Community">
              <IoRadio size={18} className="group-hover:text-gray-950" />
              <small className={({ isActive }) => isActive ? "text-green-600 font-extrabold" : "text-white font-bold "}>Community</small>
            </NavLink>
          </li>
          <li className="hover:bg-white group rounded-md transition">
            <NavLink to="message"
              className={({ isActive }) => isActive ? "px-2 py-1 bg-white text-gray-950 flex flex-col justify-center items-center rounded-md transition" : " px-2 py-1 flex flex-col justify-center items-center text-white"
              } title="Today">
              <IoMdMusicalNotes size={18} className={({ isActive }) => isActive ? "text-gray-950" : "text-white group-hover:text-gray-950"} />
              <small className={({ isActive }) => isActive ? "text-green-600 font-extrabold" : "text-white font-bold "}>Music</small>
            </NavLink>
          </li>
          <li className="hover:bg-white group rounded-md transition">
            <NavLink to="stream"
              className={({ isActive }) => isActive ? "px-2 py-1 bg-white text-gray-950 flex flex-col justify-center items-center rounded-md transition" : " px-2 py-1 flex flex-col justify-center items-center text-white"
              } title="Today">
              <GrMultimedia size={18} className={({ isActive }) => isActive ? "text-gray-950" : "text-white group-hover:text-gray-950"} />
              <small className={({ isActive }) => isActive ? "text-green-600 font-extrabold" : "text-white font-bold "}>Stream</small>
            </NavLink>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default Menu;
