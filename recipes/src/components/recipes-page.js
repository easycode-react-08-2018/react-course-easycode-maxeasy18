import React from 'react';
import {Recipe} from './recipe';
import {Link} from "react-router-dom";


export class RecipesPage extends React.Component {

  returnListOfRecipes = () => {

      return this.props.recipes.map( (recipe) => {
        return <Recipe key={recipe.id} recipe={recipe} ingridients={this.props.ingridients}  />
      });

  }

  render(){
    return (
      <React.Fragment>
          <Link to={"/addrecipe/"}><button>Add Recipe</button></Link>

          <div className="recipes-list">
            {this.returnListOfRecipes()}

          </div>
      </React.Fragment>
    )
  }
}