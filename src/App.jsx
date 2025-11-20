import { Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./components/Home";
import Community from "./components/Community";
import Message from "./components/Message";
import Stream from "./components/Stream";
import Short from "./components/Short";
import Sermon from "./components/Sermon";

function App() {

  return (
    <div className=" w-full lg:w-[600px] h-auto mx-auto overflow-auto">
      <div className="h-full relative">
        <div className="p-3 pb-30">
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="community" element={<Community />} />
            <Route path="messages" element={<Message />} />
            <Route path="sermon" element={<Sermon />} />
            <Route path="stream" element={<Stream />} />
            <Route path="short" element={<Short />} />
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