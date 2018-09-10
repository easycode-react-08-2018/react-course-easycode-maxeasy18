import React from 'react';

export class Recipe extends React.Component {
  createListOfIngridients(listOfIngridients){
    return listOfIngridients.map(( ingridient ) => {
        return <li key={'ingr_' + ingridient.id + Math.random()}>{ingridient.name}</li>
    });
  }
  render(){
    const recipe = this.props.recipe;
    return (
        <div className="recipe well">
          <div className="recipe-logo">
            <img src="" alt="logo" />
          </div>
          <div className="recipe-descr">
            <div className="recipe-title">
            {recipe.title}
            </div>
            <div className="recipe-ingredients">
              <ul className="recipe-ingredient">
                
                {this.createListOfIngridients(recipe.ingridients)}
              </ul>
            </div>
          </div>
          <div className="recipe-actions">
            <button>Edit</button>
            <br />
            <button>remove</button>
          </div>
        </div>

    )
  }
}