import { Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./components/Home";
import Community from "./components/Community";

function App() {

  return (
    <div className=" w-full lg:w-[600px] h-auto mx-auto overflow-auto">
      <div className="bg-gray-900 h-full relative">
        <div className="p-3 pb-10">
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="community" element={<Community />} />
          </Routes>
        </div>
        <div className="fixed w-[600px] bottom-0 mt-10">
          <Menu />
        </div>
      </div>

    </div>
  )
}

export default App;