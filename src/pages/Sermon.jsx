import { useEffect, useState, useRef } from "react"
import { songsList } from "../../messages"
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  SkipBack,
  SkipForward,
} from "lucide-react"
const Sermon = () => {

  const [currentSong, setCurrentSong] = useState(songsList[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const audioRef = useRef(null);

  const handlePlayPause = () => {
    if (!isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }

  useEffect(() => {
    const updateTime = () => {
      setProgress(
        (audioRef.current.currentTime / audioRef.current.duration) * 100
      );
    };
    audioRef.current.addEventListener("timeupdate", updateTime);
    return () =>
      audioRef.current.removeEventListener("timeupdate", updateTime);
  }, []);

  const handleSelectSong = (song) => {
    setCurrentSong(song);
    setIsPlaying(true);
    // Play the new song automatically
    setTimeout(() => {
      audioRef.current.play();
    }, 0);
  };

  const handleSeek = (e) => {
    const value = e.target.value;
    setProgress(value);
    audioRef.current.currentTime =
      (value / 100) * audioRef.current.duration;
  };

  const handleVolume = (e) => {
    const value = e.target.value;
    setVolume(value);
    audioRef.current.volume = value;
  };


  return (
    <div className="flex flex-col gap-5 px-2 py-2 h-full">
      <div>
        <h3 className="font-bold text-2xl text-gray-800">The Morning Radio Show with Pst Abraham Arigi</h3>
      </div>
      <div className="flex justify-between items-center gap-4 w-full h-[140px] p-3 rounded-lg bg-blue-200">
        <div className="w-full max-w-lg mx-auto text-white">
          <audio
            ref={audioRef}
            src={currentSong.url}
            onEnded={() => setIsPlaying(false)}
          />

          <h2 className="text-xl font-bold">{songsList.title}</h2>
          <p className="text-gray-400 text-sm mb-4">{songsList.artist}</p>

          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={handleSeek}
            className="w-full accent-amber-700 cursor-pointer outline-none"
          />

          <div className="flex items-center justify-center gap-5">
            <button className="p-2 rounded-full bg-blue-300 hover:bg-zinc-700 shadow-md shadow-amber-700/70">
              <SkipBack size={16} color="black" />
            </button>

            <button
              onClick={handlePlayPause}
              className="p-3 rounded-full bg-amber-800 hover:bg-amber-700 cursor-pointer"
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>

            <button className="p-2 rounded-full bg-blue-300 hover:bg-zinc-700 shadow-md shadow-amber-700/70">
              <SkipForward size={16} color="black" />
            </button>
          </div>
          <div className="flex items-center gap-3 mt-4">
            {/* {volume > 0 ? <Volume2 size={18} /> : <VolumeX size={18} />}
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolume}
              className="accent-blue-500 cursor-pointer w-full"
            /> */}
          </div>
        </div>
      </div>
      <div>
        <small className="text-gray-800 font-bold pb-5">Message Play List</small>
        <div className="mt-5">
          {songsList.map((song) => (
            <li key={song.id} className="mb-2">
              <button
                onClick={() => handleSelectSong(song)}
                className={`px-2 py-1 rounded ${song.id === currentSong.id ? "bg-green-500 text-white" : "bg-gray-200"
                  }`}
              >
                {song.title} - {song.artist}
              </button>
            </li>
          ))}
        </div>

      </div>

    </div>
  )
}

export default Sermon;
