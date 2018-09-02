import React, {Component} from 'react';
import {CartItem} from './cart_item';

export class Card extends Component {
  render() { 
    const items = this.props.items;
    const returnListOfItems = (items) => {
      return items.map(( item ) => {
        const removeItemFromCart = () => {
          this.props.removeItemFromCart(item.id);
        }
        return <CartItem key={item.id} item={item} removeItemFromCart={removeItemFromCart} ></CartItem>
      });
    }
    const shipIt = () => {
      this.props.removeItemFromCart();
    }
    return (  
    <div className="container">
      <div className="row">
        <div className="col-8">
          <h1>Shopping Cart</h1>
          <ul className="list-group">
            {returnListOfItems(items)}
          </ul>
        </div>
        <div className="col-4">
          <div>
            User
          </div>
          <button onClick={this.props.changePageToHomePage}>User Logout</button>
        </div>
      </div>
      <div className="row">
        <pre>price:</pre>
      </div>
      <div className="row">
        <button className="btn btn-primary" onClick={this.props.changePageToUserPage}>to shop</button>
        <button className="btn btn-primary" onClick={shipIt}>Ship it</button>
      </div>
    </div>
    )
  }
}