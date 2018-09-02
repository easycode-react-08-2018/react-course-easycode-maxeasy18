import React, {Component} from "react";

export class Orders extends Component {
    render () {
        console.log(this.props)
        return <button onClick={this.props.changePageToCartPage}>Orders</button>
    }
}
