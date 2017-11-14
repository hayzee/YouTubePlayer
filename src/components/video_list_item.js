import React from 'react';  // <- always needed for JSX as JSX gets expanded!

//const VideoListItem = (props) => {
  //const video = props.video;

const VideoListItem = ({video, onVideoSelect}) => {   // this is better than preceding 2 lines - ES6 destructuring

  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li className="list-group-item" onClick={()=>onVideoSelect(video)}>
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl}/>
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
  </li>
  );

}

export default VideoListItem;
