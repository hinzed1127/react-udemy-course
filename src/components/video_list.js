import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return (
        <VideoListItem
            onVideoSelect={props.onVideoSelect}
            key={video.etag}
            video={video} />
    );
    //For reason to add key attribute, reference here:
    //https://facebook.github.io/react/docs/lists-and-keys.html
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;
