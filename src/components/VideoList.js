import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onSelectVideo }) => {
  const videosToRender = videos.map((video, index) => {
    return (<VideoItem video={video} key={index} onSelectVideo={onSelectVideo} />)
  });
  return <div className="ui relaxed divided list">{videosToRender}</div>
}

export default VideoList;
