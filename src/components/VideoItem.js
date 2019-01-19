import './styles/VideoItem.css';
import React from 'react';

const VideoItem = ({ video, onSelectVideo }) => {
  return (
    <div className="item video-item" onClick={() => onSelectVideo(video)}>
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.description}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;