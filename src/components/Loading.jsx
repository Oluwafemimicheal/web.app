import { GiEnlightenment } from "react-icons/gi"
import { motion } from 'framer-motion'


const Loading = () => {
  return (
    <div className='fixed'>
      <div className=' h-screen w-screen flex flex-col gap-0 justify-center items-center bg-linear-to-t from-amber-600 to-black relative'>
        <motion.div initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.9 }} className="flex flex-col justify-center items-center ">
          <GiEnlightenment size={50} className="text-white absolute animate-ping " />
          <GiEnlightenment size={80} className="text-white" />
          <h1 className="font-bold font-serif text-white -mt-3">
            StreamLight
          </h1>
        </motion.div>
      </div>
    </div>
  )
}

export default Loading
