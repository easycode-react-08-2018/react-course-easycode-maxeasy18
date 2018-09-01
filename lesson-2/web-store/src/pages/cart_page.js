import React, {Component} from 'react';
import {CartGood} from './cart_good';

export class Card extends Component {
  render() { 
    const goods = this.props.goods;
    console.log(goods);
    const returnListOfGoods = (goods) => {
      return goods.map(( good ) => {
        const removeGoodFromCart = () => {
          this.props.removeGoodFromCart(good.id);
        }
        return <CartGood key={good.id} good={good} removeGoodFromCart={removeGoodFromCart} ></CartGood>
      });
    }
    return (  
    <div className="container">
      <div className="row">
        <div className="col-8">
          <h1>Shopping Cart</h1>
          <ul className="list-group">
            {returnListOfGoods(goods)}
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
        <button className="btn btn-primary">Ship it</button>
      </div>
    </div>
    )
  }
}