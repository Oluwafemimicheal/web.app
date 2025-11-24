import { FaPlay } from "react-icons/fa"

const Song = ({topic}) => {
  return (
    <li className="flex justify-between items-center bg-gray-200 p-3 rounded-sm">
      <p>{topic}</p>
      <FaPlay size={15} color="gray" className="cursor-pointer hover:opacity-30" />
    </li>
  )
}

export default Song
