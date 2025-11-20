import { NavLink } from "react-router-dom"
import { FaAccessibleIcon, FaBell } from "react-icons/fa"

const Bible = () => {
  return (
    <div className="flex flex-col gap-5 h-full overflow-auto">
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
            to="/bible"
            className={({ isActive }) => isActive ? "text-[18px] pb-1 border-b-2 border-sky-600 " : ""
            }
          >
            Bible
          </NavLink>

        </div>
        <div className="flex gap-5">
          <FaAccessibleIcon size={20} />
          <FaBell size={20} />
        </div>

      </div>
      <div className="w-full h-[100px] p-3 rounded-lg bg-gray-800 ">
       Bible
      </div>

    </div>
  )
}

export default Bible
