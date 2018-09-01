import React, {Component} from 'react';

import {Login} from './pages/home_pages.js';
import {Card} from './pages/cart_page.js';
import {User} from './pages/user_page.js';
import {Admin} from './pages/admin_page.js';


class App extends Component {
  constructor() {
    super();
    this.state = {
      activePage: "homePage",
      goods: [
        {
          id: 1,
          title: "MacBook pro 2018",
          text: "MacBook pro 2018"
        },
        {
          id: 2,
          title: "Dell xs",
          text: "Dell xs"
        },
        {
          id: 3,
          title: "Microsoft Surface",
          text: "Microsoft Surface"
        },
      ],
      cart : [2]
    };
  }

  addGoodToCart = (goodsId) => {
    this.state.cart.push(goodsId);
    this.setState({
      cart: this.state.cart
    });
  }

  removeGoodFromCart = (goodsId) => {
    const stateCart = this.state.cart;
    const toDelIndex = stateCart.indexOf(goodsId);
    if( toDelIndex !== -1){
      stateCart.splice(toDelIndex,1);
    }
    this.setState({
      cart: stateCart
    });
  }  

  getGoodsInCart = () => {
    const actualList = this.state.goods.filter((good) => {
      if(this.state.cart.indexOf(good.id) === -1){
        return false;
      }
      return true;
    });
    return actualList;    
  }


  changePageToUserPage = () => {
    this.setState({
      activePage: "userPage"
    });
  };
  changePageToAdminPage = () => {
    this.setState({
      activePage: "adminPage"
    });
  };
  changePageToHomePage = () => {
    this.setState({
      activePage: "homePage"
    });
  };
  changePageToCartPage = () => {
    this.setState({
      activePage: "cartPage"
    });
  };

  render() {
    const { activePage } = this.state;
    if (activePage === "homePage") {
      return (
        <Login
          changePageToUserPage={this.changePageToUserPage}
          changePageToAdminPage={this.changePageToAdminPage}
        />
      );
    }

    if (activePage === "userPage") {
      return (
        <User
          addGoodToCart={this.addGoodToCart}
          changePageToHomePage={this.changePageToHomePage}
          changePageToCartPage={this.changePageToCartPage}
          goods={this.state.goods}
          cart={this.state.cart}
        />
      );
    }

    if (activePage === "adminPage") {
      return (
        <Admin
          changePageToHomePage={this.changePageToHomePage}
          changePageToCartPage={this.changePageToCartPage}
        />
      );
    }

    if (activePage === "cartPage") {
      return (
        <Card 
          goods={this.getGoodsInCart()} 
          removeGoodFromCart={this.removeGoodFromCart} 
          changePageToHomePage={this.changePageToHomePage} 
          changePageToUserPage={this.changePageToUserPage} 
          />
      );
    }
  }
}

export default App;