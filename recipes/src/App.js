import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import {Header} from './components/header';
import {SignIn} from './components/sign-in';
import {SignUp} from './components/sign-up';
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
    ingridients: ["1238","1239","1240"]
},
    {
        name: 'Recept 2',
        id: '02',
        ingridients: ["1234","1235","1236","1237"]
    }
]


class App extends Component {

    constructor(){
        super();
        this.state = {
            recipes : recipes,
            ingridients : ingridients,
            
        }
    }

    renderRecipes = () => {
        // console.log(recipes);
        return <RecipesPage recipes={this.state.recipes} isAuthed={true} ingridients={this.state.ingridients} deleteRecipe={this.deleteRecipe}/>
    }

    getRecipe(id){
        return recipes.find( (recipe) => {
            return recipe.id === id;
        })

    }

    makeid(){
        let text = "";
        const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < 4; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }

    saveRecipe = (recipeChanged) => {
        const recipeIndex = this.state.recipes.findIndex( (recipe) => {
            return recipe.id === recipeChanged.id;
        });
        if(recipeIndex !== -1){
            this.state.recipes[recipeIndex] = recipeChanged;
        }else{
            recipeChanged.id = this.makeid();
            this.state.recipes.push(recipeChanged);
        }
        this.setState({
            recipes: this.state.recipes,
            redirectAfterAdd : true
        });
       

    }
    deleteRecipe = (id) => {
        console.log(id);
        const newListOfRecipes = this.state.recipes.filter( (recipe) => {
            return recipe.id !==id;
        });
        this.setState({
            recipes: newListOfRecipes
        });
    }
    render() {

        return (
            <Router>
                <div className="container">
                    <Header />
                    <Route path="/signin" component={SignIn} />
                    <Route path="/signup" component={SignUp} />
                    <Route path="/recipes" render={this.renderRecipes} />
                    <Route path="/editrecipe/:id" render={(match) =>{
                        return <RecipeEdit saveRecipe={this.saveRecipe} ingridients={ingridients} recipe={this.getRecipe(match.match.params.id)}  />
                    }}  />
                    <Route path="/addrecipe/" render={(match) =>{
                        return <RecipeEdit saveRecipe={this.saveRecipe} ingridients={ingridients}  />
                    }}  />

                </div>
            </Router>
        );
    }
}

export default App;
