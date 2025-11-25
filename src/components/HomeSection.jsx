import { FaClock } from "react-icons/fa"
const HomeSection = ({ title, desc, podcastImage }) => {
  return (
    <div className="grid grid-cols-3 gap-4 w-full h-auto p-3 rounded-lg bg-gray-200 border-2 border-gray-300">
      <div className="col-span-2">
        <h1 className="font-semibold ">{title}</h1>
        <p className="text-sm text-primary">{desc}</p>
        <div className="flex gap-2 items-center mt-5">
          <FaClock size={25} color="white" />
          <p>2-5 min</p>
        </div>
      </div>
      <div className="flex justify-center items-center w-[100px] h-[100px] border-2 border-gray-300 rounded-lg overflow-hidden">
        <img src={podcastImage} alt="loading" />
      </div>
    </div>
  )
}

export default HomeSection
