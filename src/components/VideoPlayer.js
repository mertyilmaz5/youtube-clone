import React from "react";

function VideoPlayer({ video, onClose }) {
  if (!video) return null;

  return (
    <div className="video-player-overlay">
      <div className="video-player">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <video src={video.url} controls autoPlay />
        <p className="video-title"> #{video.title}</p>
      </div>
    </div>
  );
}

export default VideoPlayer;
