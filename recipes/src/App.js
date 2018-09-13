import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

import {Header} from './components/header';
import {SignIn} from './components/signin';
import {RecipesPage} from './components/recipes-page';
import {RecipeEdit} from './components/recipe-edit';

const ingridients = [
  {
    name: 'Ingridient 01',
    id: '1234'
  },
  {
    name: 'Ingridient 02',
    id: '1235'
  },
  {
    name: 'Ingridient 03',
    id: '1236'
  },
  {
    name: 'Ingridient 04',
    id: '1237'
  },
  {
    name: 'Ingridient 05',
    id: '1238'
  },
  {
    name: 'Ingridient 06',
    id: '1239'
  },
  {
    name: 'Ingridient 07',
    id: '1240'
  }      
]

const recipes = [{
    name: 'Recept 1',
    id: '01',
    ingridients: [
      {
        name: 'Ingridient 01',
        id: '1234',
        quantity: 0
      },
      {
        name: 'Ingridient 02',
        id: '1235',
        quantity: 1
      }   ,
      {
        name: 'Ingridient 03',
        id: '1235',
        quantity: 2
      }          

    ]
  },
  {
    name: 'Recept 2',
    id: '02',
    ingridients: [
      {
        name: 'Ingridient 02',
        id: '1234',
        quantity: 1
      },
      {
        name: 'Ingridient 01',
        id: '1235',
        quantity: 2
      }   ,
      {
        name: 'Ingridient 03',
        id: '1235',
        quantity: 0
      }          

    ]
  }
]


class App extends Component {

  constructor(){
    super();
    this.state = {
      recipes : recipes
    }
  }

  renderRecipes = () => {
  // console.log(recipes);
    return <RecipesPage recipes={this.state.recipes} isAuthed={true}/>
  }
  renderEdit = () =>{
    return <RecipeEdit ingridients={ingridients} isAuthed={true}/>
  }

  render() {
    return (
      <Router>
        <div className="container">
          <Header />
          <Route path="/signin" component={SignIn} />
          <Route path="/recipes" render={this.renderRecipes} />
          <Route path="/editrecipe/:id" render={this.renderEdit}  />

        </div>
      </Router>
    );
  }
}

export default App;
