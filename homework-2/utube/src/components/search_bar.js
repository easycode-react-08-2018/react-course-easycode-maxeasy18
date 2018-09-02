import React, { Component } from 'react';

export class SearchBar extends Component {
    render () {
        console.log('render bar');

        return (
            <div className="search-bar navbar">
                <input type="text" onChange={this.props.updateSearch} placeholder="Search" />
            </div>
        )
    }
}
