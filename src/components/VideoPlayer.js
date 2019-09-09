import React from 'react';
import moment from 'moment';

const VideoPlayer = ({ video }) => {
  if (!video) {
    return <div>Loading video player...</div>;
  }
  const {id,snippet} = video
  const {title,description,publishedAt} = snippet;
  const videoId = id.videoId;
  const url = `https://youtube.com/embed/${videoId}`;
  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div>{title}</div>
        <div>{description}</div><br/>
        <p><b>Published on</b> {moment(publishedAt).format('D MMM YYYY')} </p>
      </div>
    </div>
  );
}

export default VideoPlayer;