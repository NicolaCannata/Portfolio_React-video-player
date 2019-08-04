import React from 'react';

const VideoDetail = ({video}) => {
    if(!video){
        return <div>caricamento</div>
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

    return  <div>
            <div className="ui embed">
                <iframe title="Video Player Title" src={videoSrc} /> 
            </div>
            <div className="ui segment">
                <h4 className="header">{video.snippet.title}</h4>
                <h5 className="header">Channel of: {video.snippet.channelTitle}</h5>
                <p>{video.snippet.description}</p>
            </div>
            </div>
}

export default VideoDetail;

