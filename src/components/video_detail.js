import React from 'react';

const VideoDetail = ({video}) => {

  // React wants to render immediately, but video may not exists in the props object
  if (!video) {
    return <div>Loading ...</div>
  }

  const videoId = video.id.videoId;

  //  const url = 'https://www.youtube.com/embed' + videoId;

  // template string or interpolation using a backtick
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );

}

export default VideoDetail;
