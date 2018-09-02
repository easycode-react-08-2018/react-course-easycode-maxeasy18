import React, { Component } from "react";
import {VideoPreview} from "./video_preview";

const renderPreviews = (previews,activatePreview) => {
    return previews.map( (preview) => {
       return  <VideoPreview key={preview.id} preview={preview} activatePreview={activatePreview}></VideoPreview>
    });
}

export class PreviewList extends Component{
    render(){
        console.log('render list')
        return (

            <ul className="col-md-4 list-group">
                {renderPreviews(this.props.previews,this.props.activatePreview)}
            </ul>
        )
    }
}
