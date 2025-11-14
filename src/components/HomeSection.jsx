import { FaClock } from "react-icons/fa"
const HomeSection = () => {
  return (
    <div className="flex justify-between gap-4 w-full h-auto p-3 rounded-lg bg-gray-800 ">
      <div className="w-fit">
        <h1 className="font-semibold ">Audio Bible Verse of the Day</h1>
        <p className="text-sm">The right priority</p>
        <div className="flex gap-2 items-center mt-5">
          <FaClock size={25} color="white" />
          <p>2-5 min</p>
        </div>
      </div>
      <div className="flex justify-center items-center w-[100px] h-[100px] border-2 border-gray-500 rounded-lg overflow-hidden">


      </div>
    </div>
  )
}

export default HomeSection
