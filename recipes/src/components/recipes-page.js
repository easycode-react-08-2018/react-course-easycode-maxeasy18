import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Recipe} from './recipe';


export class RecipesPage extends React.Component {

  returnListOfRecipes = () => {
      return this.props.recipes.map( (recipe) => {
        return <Recipe key={recipe.id} recipe={recipe}  />
      });

  }

  render(){
    return (
      <div className="recipes-list">
        {this.returnListOfRecipes()}

      </div>      
    )
  }
}