import React from 'react';


const VideoDetail = ({ video }) => {
  const VIDEO_SRC = `https://www.youtube.com/embed/${video.id.videoId}`
  return (
    <div>
      <div className="ui embed">
        <iframe src={VIDEO_SRC} title={video.snippet.title}></iframe>
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>);
}

export default VideoDetail;