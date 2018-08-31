import React, {Component} from 'react';

import {Login} from './pages/home_pages.js';
import {Card} from './pages/shoping_cart.js';
import {User} from './pages/user_page.js';
import {Admin} from './pages/admin_page.js';
// import './app.css';



class App extends Component {
  constructor(){
    super();
    this.state = {
      activePage: 'homePage'
    }
  }

  changePageToUserPage = () => {
    this.setState({
      activePage: 'userPage'
    });
  }
  changePageToAdminPage = () => {
    this.setState({
      activePage: 'adminPage'
    });
  }  
  changePageToHomePage = () => {
    this.setState({
      activePage: 'homePage'
    });
  }  
  changePageToCartPage = () => {
    this.setState({
      activePage: 'cartPage'
    });
  }    


  render() {
    const {
      activePage
    } = this.state;

    if(activePage === 'homePage') {
      return <Login changePageToUserPage={this.changePageToUserPage} changePageToAdminPage={this.changePageToAdminPage} />;
    } 

    if(activePage === 'userPage') {
      return <User changePageToHomePage={this.changePageToHomePage} changePageToCartPage={this.changePageToCartPage} />;
    } 

    if(activePage === 'adminPage') {
      return <Admin changePageToHomePage={this.changePageToHomePage} />;
    } 

    if(activePage === 'cartPage') {
      return <Card changePageToHomePage={this.changePageToHomePage} />;
    } 

  }
}

export default App;