import React from 'react';
import {  Link } from "react-router-dom";


export class Recipe extends React.Component {
  createListOfIngridients(listOfIngridients){
    return listOfIngridients.map(( ingridient ) => {
        const ingridientFromState = this.props.ingridients.find( (ingr) => {
            return ingr.id === ingridient;
        });
        return <li key={ingridientFromState.id}>{ingridientFromState.name}</li>
    });
  }
  render(){
      console.log(this.props.ingridients);

      const {name,ingridients,id} = this.props.recipe;
    return (
        <div className="recipe well">
          <div className="recipe-logo">
              <img src="/img/party-dish.jpg" />
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