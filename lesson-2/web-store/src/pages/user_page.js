import React, {Component} from 'react';
import {ShopGood} from './shop_good';

export class User extends Component {
  render() { 
    const goods = this.props.goods;
    const inCart = this.props.cart;
    const returnListOfGoods = (goods) => {
      return goods.map(( good ) => {
        let inBasket = false;
        if(inCart.indexOf(good.id) !== -1){
          inBasket = true;
        }
        const addGoodToCart = () => {
          this.props.addGoodToCart(good.id);
        }
        return <ShopGood key={good.id} good={good} inBasket={inBasket} addGoodToCart={addGoodToCart} ></ShopGood>
      });
    }
    return (  
        <div className="container">
          <h1>USER PAGE</h1>
          <div className="row">
            <div className="col-8">
              <div className="row">
                {returnListOfGoods(goods)}
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