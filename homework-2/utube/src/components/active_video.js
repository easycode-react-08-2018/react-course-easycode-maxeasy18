import React, { Component } from 'react';

export class ActiveVideo extends Component {
    render () {
        const video = this.props.activeVideo;
        const linkToVideo = 'https://www.youtube.com/embed/' + video.id

    console.log(linkToVideo);
        return (
            <div className="video-detail col-md-8">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe title="random" src={linkToVideo}/>
                </div>
                <div className="details">
                    <div>{video.title}</div>
                    <div>{video.description}</div>
                </div>
            </div>
        )
    }
}
