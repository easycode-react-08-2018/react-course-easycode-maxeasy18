import React from 'react';

export class Ingridient extends React.Component{


    render(){
        const {id,name} = this.props.ingridient;
        const isSelected = this.props.isSelected;
        return (
            <li
                className={"ingridient list-group-item " + (isSelected ? 'selected' : "") }
                onClick={() => { this.props.onClick(id)}}
                >{name}</li>
        )}
}