import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Recipe} from './recipe';


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


export class RecipesPage extends React.Component {

  returnListOfRecipes = () => {
      return recipes.map( (recipe) => {
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