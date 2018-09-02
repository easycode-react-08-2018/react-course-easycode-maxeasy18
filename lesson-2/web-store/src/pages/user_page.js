import React, {Component} from 'react';
import {ShopItem} from './shop_item';
import {Logout} from './../components/shared/logout';
import {Orders} from './../components/shared/orders_button.js';


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
                <Orders changePageToCartPage={this.props.changePageToCartPage} ></Orders>

                <br />
                <Logout changePageToHomePage={this.props.changePageToHomePage}></Logout>
            </div>
          </div>
        </div>
    )
  }
}        