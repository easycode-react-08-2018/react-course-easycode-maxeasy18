import React, { Component } from 'react';

export class VideoPreview extends Component {
    render () {
        const preview = this.props.preview;
        console.log(preview);
        return (
            <li className="list-group-item" onClick={this.props.activatePreview}>
                <div className="video-list media">
                    <div className="video-list media">
                        <div className="media-left">
                            <img alt="" className="media-object" src={preview.thumbnails.default.url} />
                        </div>
                    </div>
                    <div className="media-body">
                        <div className="media-heading">{preview.title}</div>
                    </div>
                </div>
            </li>
        )
    }
}
