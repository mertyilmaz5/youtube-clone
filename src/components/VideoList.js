import React from "react";
import VideoItem from "./VideoItem";
import videos from "../data/videos.json";

function VideoList({ isFirstTwo, onVideoSelect }) {
  const filteredVideos = videos.filter(
    (video) => video.isFirstTwo === isFirstTwo
  );

  return (
    <div className="video-list">
      {filteredVideos.map((video) => (
        <VideoItem key={video.id} video={video} onVideoSelect={onVideoSelect} />
      ))}
    </div>
  );
}

export default VideoList;
