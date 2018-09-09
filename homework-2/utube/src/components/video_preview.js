import React, { Component } from 'react';

export class VideoPreview extends Component {
    render () {
        const preview = this.props.preview;
        return (
            <li className="list-group-item" onClick={() => this.props.activatePreview(preview)}>
                <div className="video-list media">
                    <div className="video-list media">
                        <div className="media-left">
                            <a href={this.props.makeActive}><img alt="" className="media-object" src={preview.thumbnails.default.url} /></a>
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
