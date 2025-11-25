import { LuRadioTower } from "react-icons/lu";

const Radio = () => {
  return (
    <div className="h-[500px] w-full flex flex-col justify-center items-center">

      <div className="relative">
        <LuRadioTower size={60} color={"gray"} className="animate-ping" />
        <LuRadioTower size={60} color={"gray"} className="absolute top-0 left-0" />
      </div>
      <div className="flex justify-start items-center gap-1 mt-5">
        <div className="w-2.5 h-2.5 bg-green-600 rounded-full ">
          <div className="w-2.5 h-2.5 bg-green-600 rounded-full animate-ping">
          </div>
        </div>
        <small>Live Radio</small>
      </div>
    </div>
  )
}

export default Radio
