import { Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./components/Home";
import Community from "./components/Community";
import Message from "./components/Message";
import Stream from "./components/Stream";

function App() {

  return (
    <div className=" w-full lg:w-[600px] h-auto mx-auto overflow-auto">
      <div className="bg-gray-900 h-full relative">
        <div className="p-3 pb-30">
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="community" element={<Community />} />
            <Route path="messages" element={<Message />} />
            <Route path="stream" element={<Stream />} />
          </Routes>
        </div>
        <div className="fixed w-full lg:w-[600px] bottom-5 flex items-center">
          <Menu />
        </div>
      </div>

    </div>
  )
}

export default App;