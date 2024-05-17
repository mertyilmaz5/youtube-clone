import React, { useState } from "react";
import VideoList from "./components/VideoList";
import VideoPlayer from "./components/VideoPlayer";
import "./App.css";

function App() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  const handleClosePlayer = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="app">
      <header className="header">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1280px-Logo_of_YouTube_%282015-2017%29.svg.png"
          alt="Youtube Logo"
          className="logo"
        />
        <span className="clone-text">Clone</span>
      </header>
      <div className="content">
        <div className="sidebar">
          <VideoList isFirstTwo={true} onVideoSelect={handleVideoSelect} />
        </div>
        <div className="main-content">
          <VideoList isFirstTwo={false} onVideoSelect={handleVideoSelect} />
        </div>
      </div>
      {selectedVideo && (
        <VideoPlayer video={selectedVideo} onClose={handleClosePlayer} />
      )}
    </div>
  );
}

export default App;
