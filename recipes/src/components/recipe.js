import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


export class Recipe extends React.Component {
  createListOfIngridients(listOfIngridients){
    return listOfIngridients.map(( ingridient ) => {
        return <li key={'ingr_' + ingridient.id + Math.random()}>{ingridient.name}</li>
    });
  }
  render(){
    const {name,ingridients,id} = this.props.recipe;
    console.log(id);
    return (
        <div className="recipe well">
          <div className="recipe-logo">
            <img src="" alt="logo" />
          </div>
          <div className="recipe-descr">
            <div className="recipe-title">
            <b>{name}</b>
            </div>
            <div className="recipe-ingredients">
              <ul className="recipe-ingredient">

                {this.createListOfIngridients(ingridients)}
              </ul>
            </div>
          </div>
          <div className="recipe-actions">
            <button><Link to={"/editrecipe/" + id}>Edit</Link></button>
            <br />
            <button>remove</button>
          </div>
        </div>

    )
  }
}