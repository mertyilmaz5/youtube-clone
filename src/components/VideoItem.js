import React from "react";
import ReactHoverVideo from "react-hover-video-player";

function VideoItem({ video, onVideoSelect }) {
  return (
    <div className="video-item" onClick={() => onVideoSelect(video)}>
      <ReactHoverVideo
        videoSrc={video.url}
        muted={true}
        className="video-item-hover"
        hovertargetclassname="video-item-hover"
      />
      <p className="video-title">- {video.title} -</p>
    </div>
  );
}

export default VideoItem;
