import React, {Component} from 'react';


export class CartGood extends Component {
    render() {
        const good = this.props.good;
        return (
            <li className="list-group-item">
                <img src="#" alt=""/>
                <button className="admin-orders__link">
                {good.title}
                </button>
                <h2 className="float-right badge-light">✓</h2>
                <br />
                <button className="btn btn-primary" onClick={this.props.removeGoodFromCart}>remove</button>

            </li>
            
        )

    }
}

