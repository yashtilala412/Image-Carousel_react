import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import './VideoPlayer.css';

const VideoPlayer = ({ videoUrl }) => {
  const [playing, setPlaying] = useState(false);

  const togglePlaying = () => {
    setPlaying(!playing);
  };

  return (
    <div className="video-player">
      <div className="video-wrapper">
        <ReactPlayer
          url={videoUrl}
          playing={playing}
          controls={true}
          width='100%'
          height='100%'
        />
      </div>
      <button className="play-button" onClick={togglePlaying}>
        {playing ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default VideoPlayer;
