import React, {Component} from 'react';
import {ShopItem} from './shop_item';

export class User extends Component {
  render() { 
    const items = this.props.items;
    const inCart = this.props.cart;
    const returnListOfItems = (items) => {
      return items.map((item ) => {
        let inBasket = false;
        if(inCart.indexOf(item.id) !== -1){
          inBasket = true;
        }
        const addItemToCart = () => {
          this.props.addItemToCart(item.id);
        }
        return <ShopItem key={item.id} item={item} inBasket={inBasket} addItemToCart={addItemToCart} ></ShopItem>
      });
    }
    return (  
        <div className="container">
          <h1>USER PAGE</h1>
          <div className="row">
            <div className="col-8">
              <div className="row">
                {returnListOfItems(items)}
              </div>
            </div>
            <div className="col-4">
              <div>
                User
              </div>
              <button className="btn btn-primary" onClick={this.props.changePageToCartPage}>
                Orders
              </button>              
              <br />
              <button onClick={this.props.changePageToHomePage}>User Logout</button>
            </div>
          </div>
        </div>
    )
  }
}        