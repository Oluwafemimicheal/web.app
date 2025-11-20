import { FaBars, FaPause, FaPlane, FaReceipt } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";
import { IoRadio } from "react-icons/io5";
import { IoMdMusicalNotes } from "react-icons/io";
import { GrMultimedia } from "react-icons/gr";
import { FaRegUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div className="w-full flex relative px-2">
      <div className="bg-gray-800 py-2 px-2 w-full rounded-lg shadow-md shadow-black/30">
        <ul className="flex justify-between items-center">
          <li className="hover:bg-white group rounded-md transition">
            <NavLink to="/"
              className={({ isActive }) => isActive ? "px-2 py-1 bg-white text-gray-950 flex flex-col justify-center items-center rounded-md transition" : " px-2 py-1 flex flex-col justify-center items-center text-white"
              } title="Today">
              <CiCalendar size={18} className={({ isActive }) => isActive ? "text-gray-950" : "text-white group-hover:text-gray-950"} />
              <small>Today</small>
            </NavLink>
          </li>
          <li className="hover:bg-white group rounded-md transition">
            <NavLink to="radio"
              className={({ isActive }) => isActive ? "px-2 py-1 bg-white text-gray-950 flex flex-col justify-center items-center rounded-md transition" : " px-2 py-1 flex flex-col justify-center items-center text-white"
              } title="Community">
              <IoRadio size={18} className="group-hover:text-gray-950" />
              <small>Radio</small>
            </NavLink>
          </li>
          <li className="hover:bg-white group rounded-md transition">
            <NavLink to="sermon"
              className={({ isActive }) => isActive ? "px-2 py-1 bg-white text-gray-950 flex flex-col justify-center items-center rounded-md transition" : " px-2 py-1 flex flex-col justify-center items-center text-white"
              } title="Today">
              <FaReceipt size={18} className={({ isActive }) => isActive ? "text-gray-950" : "text-white group-hover:text-gray-950"} />
              <small>Sermon</small>
            </NavLink>
          </li>
          <li className="hover:bg-white group rounded-md transition">
            <NavLink to="short"
              className={({ isActive }) => isActive ? "px-2 py-1 bg-white text-gray-950 flex flex-col justify-center items-center rounded-md transition" : " px-2 py-1 flex flex-col justify-center items-center text-white"
              } title="Today">
              <IoMdMusicalNotes size={18} className={({ isActive }) => isActive ? "text-gray-950" : "text-white group-hover:text-gray-950"} />
              <small>Short</small>
            </NavLink>
          </li>
          <li className="hover:bg-white group rounded-md transition">
            <NavLink to="stream"
              className={({ isActive }) => isActive ? "px-2 py-1 bg-white text-gray-950 flex flex-col justify-center items-center rounded-md transition" : " px-2 py-1 flex flex-col justify-center items-center text-white"
              } title="Today">
              <GrMultimedia size={18} className={({ isActive }) => isActive ? "text-gray-950" : "text-white group-hover:text-gray-950"} />
              <small>Stream</small>
            </NavLink>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default Menu;
