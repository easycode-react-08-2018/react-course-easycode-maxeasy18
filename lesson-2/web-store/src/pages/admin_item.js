import React, {Component} from 'react';

export class AdminItem extends Component {
    render() {
        const item = this.props.item;
        return (
            <li className="list-group-item">
                <img src="#" alt=""/>
                <button className="admin-orders__link">
                    {item.title}
                </button>
                <h2 className="float-right btn-link">✎</h2>
                <br />
                <button className="btn btn-primary" onClick={this.props.removeItem}>remove</button>
            </li>
        )

    }
}

