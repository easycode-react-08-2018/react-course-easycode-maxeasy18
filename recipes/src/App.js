import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

import {Header} from './components/header';
import {SignIn} from './components/signin';
import {RecipesPage} from './components/recipes-page';

class App extends Component {



  render() {
    return (
      <Router>
        <div className="container">
          <Header />
          <Route path="/signin" component={SignIn} />
          <Route path="/recipes" component={RecipesPage} />
        </div>
      </Router>
    );
  }
}

export default App;
