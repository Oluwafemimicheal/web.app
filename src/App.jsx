import { Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./pages/Home";
import Message from "./pages/Message";
import Stream from "./pages/Stream";
import Short from "./pages/Short";
import Sermon from "./pages/Sermon";
import Radio from "./pages/Radio";
import Bible from "./pages/Bible";
import Verse from "./components/Verse";
import Section from "./components/Section";

function App() {

  return (
    <div className=" w-full lg:w-[600px] h-auto mx-auto overflow-auto">
      <div className="h-full relative">
        <div className="p-3 pb-30">
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="radio" element={<Radio />} />
            <Route path="messages" element={<Message />} />
            <Route path="sermon" element={<Sermon />} />
            <Route path="stream" element={<Stream />} />
            <Route path="short" element={<Short />} />
            <Route path="bible" element={<Bible />} />
            <Route path="chapter/:id" element={<Verse />} />
            <Route path="verse/:chapterId" element={<Section />} />
            <Route path="*" element={<div>404 page not found</div>} />
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