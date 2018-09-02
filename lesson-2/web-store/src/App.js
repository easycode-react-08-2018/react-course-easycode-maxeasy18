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
      items: [
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

  addItemToCart = (ItemsId) => {
    this.state.cart.push(ItemsId);
    this.setState({
      cart: this.state.cart
    });
  }

  removeItemFromCart = (itemsId) => {
    const stateCart = this.state.cart;
    console.log(itemsId)
    if( typeof(itemsId) !=='undefined'){
      const toDelIndex = stateCart.indexOf(itemsId);
      if( toDelIndex !== -1){
        stateCart.splice(toDelIndex,1);
      }
      this.setState({
        cart: stateCart
      });
    }else{
      this.setState({
        cart: []
      });
    }
  }  

  getItemsInCart = () => {
    const actualList = this.state.items.filter((item) => {
      if(this.state.cart.indexOf(item.id) === -1){
        return false;
      }
      return true;
    });
    return actualList;    
  }

  removeItem = (itemId) => {
    const stateItems = this.state.items;
    const newItems = stateItems.filter( item =>  {
        if( item.id !== itemId){
          return true;
        }
        return false;
    });
    this.setState({
      items: newItems
    });     
  }

  addItem = (title) => {
    const getMaxId = () => {
      return this.state.items.reduce( (acc, item) => {
          acc = Math.max(acc, item.id);
          return acc;
      },0);
    }
    this.state.items.push({
      title: title,
      text: "some text",
      id: getMaxId() + 1
    })
    this.setState({
      items: this.state.items
    });     
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
          addItemToCart={this.addItemToCart}
          changePageToHomePage={this.changePageToHomePage}
          changePageToCartPage={this.changePageToCartPage}
          items={this.state.items}
          cart={this.state.cart}
        />
      );
    }

    if (activePage === "adminPage") {
      return (
        <Admin
          addItem={this.addItem}
          items={this.state.items}
          removeItem={this.removeItem}
          changePageToHomePage={this.changePageToHomePage}
          changePageToCartPage={this.changePageToCartPage}
        />
      );
    }

    if (activePage === "cartPage") {
      return (
        <Card 
          items={this.getItemsInCart()}
          removeItemFromCart={this.removeItemFromCart}
          changePageToHomePage={this.changePageToHomePage} 
          changePageToUserPage={this.changePageToUserPage} 
          />
      );
    }
  }
}

export default App;