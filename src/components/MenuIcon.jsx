import React from 'react'
import { FaBaby } from 'react-icons/fa'

const MenuIcon = ({link, icon, text}) => {
  return (
    <div>
      <li className="hover:bg-white group rounded-md transition">
        <NavLink to={link}
          className={({ isActive }) => isActive ? "px-2 py-1 bg-white text-gray-950 flex flex-col justify-center items-center rounded-md transition" : " px-2 py-1 flex flex-col justify-center items-center text-white"
          } title="Today">
          {
            icon ? icon :
            <FaBaby size={18} className={({ isActive }) => isActive ? "text-gray-950" : "text-white group-hover:text-gray-950"} /> 
          }
          <small className={({ isActive }) => isActive ? "text-green-600 font-extrabold" : "text-white font-bold "}>{text}</small>
        </NavLink>
      </li>
    </div>
  )
}

export default MenuIcon
