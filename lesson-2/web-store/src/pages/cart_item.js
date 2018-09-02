import React, {Component} from 'react';


export class CartItem extends Component {
    render() {
        const item = this.props.item;
        return (
            <li className="list-group-item">
                <img src="#" alt=""/>
                <button className="admin-orders__link">
                {item.title}
                </button>
                <h2 className="float-right badge-light">✓</h2>
                <br />
                <button className="btn btn-primary" onClick={this.props.removeItemFromCart}>remove</button>

            </li>
            
        )

    }
}

