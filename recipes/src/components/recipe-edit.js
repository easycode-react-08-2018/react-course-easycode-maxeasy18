import React from 'react';
import {Ingridient} from "./ingridient";


export class RecipeEdit extends React.Component {
    constructor(props){
        super(props);
        const {id,name,ingridients} = props.recipe || {
            id: null,
            name: '',
            ingridients: null
        };
        const ingridientsAll = props.ingridients.map( (ingridient) => {
            let inRecipe;
            if(ingridients && ingridients.includes(ingridient.id)){
                inRecipe = true;
            }else{
                inRecipe = false;
            }
            return {
                id : ingridient.id,
                inRecipe :inRecipe,
                isSelected: false
            };
        });
        this.state = {
            name : name,
            id : id,
            ingridientsAll : ingridientsAll,
        }
    }
    onChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    selectIngridient = (id) => {
        let newList;
        const clickedIngrPos = this.state.ingridientsAll.findIndex( (ingr) => {
            return ingr.id === id;
        });
        this.state.ingridientsAll[clickedIngrPos].isSelected = !this.state.ingridientsAll[clickedIngrPos].isSelected
        this.setState({
            ingridientsAll: this.state.ingridientsAll
        });
    }

    removeFromRecipe = (e) => {
        e.preventDefault();
        this.moveIngridient(false);
    }

    addToRecipe = (e) => {
        e.preventDefault();
        this.moveIngridient(true);
    }

    moveIngridient = (toRecipe) => {
        this.state.ingridientsAll.forEach( (ingr) => {
            if(ingr.isSelected){
                ingr.inRecipe = toRecipe;
                ingr.isSelected = false;
            }
        });
        this.setState({
            ingridientsAll: this.state.ingridientsAll
        });
    }

    createIngridientList = (inRecipe) => {
        const resList = this.state.ingridientsAll.filter( (ingridient) => {
            return ingridient.inRecipe === inRecipe;
        });
        return resList.map( (ingr) => {
            const fullIngr = this.props.ingridients.find( (fullIngr) => {
                return ingr.id === fullIngr.id
            });
            return <Ingridient key={ingr.id} ingridient={fullIngr} isSelected={ingr.isSelected} onClick={this.selectIngridient} />
        })
    }

    saveRecipe = (e) => {
        e.preventDefault();
        let changedIngridiens = this.state.ingridientsAll.filter( (ingr) => {
           return ingr.inRecipe;
        });
        changedIngridiens = changedIngridiens.map( (ingr) =>{
            return ingr.id;
        });
        const recipeChanged = {
            name : this.state.name,
            id : this.state.id,
            ingridients : changedIngridiens

        }
        this.props.saveRecipe(recipeChanged);
    }

    render(){
        return (
            <div className="recipes-edit">
                <div className="recipes-edit-child recipe-image">
                    <img src="/img/party-dish.jpg" />
                    <br />
                    <button>Upload Image</button>
                    <button>Delete Image</button>
                </div>
                <div className="recipes-edit-child  recipe-detailes well">
                    <div className="recipe-detailes-child recipe-title">
                    </div>
                    <form className="recipe-detailes-child form-horizontal">
                        <div className="form-group">
                            <label htmlFor="inputEmail3" className="col-sm-2 control-label">Title</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="inputEmail3" placeholder="Title" value={this.state.name} onChange={this.onChange} />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputPassword3" className="col-sm-2 control-label">Ingredients</label>
                            <div className="ingredients-moves col-sm-10">
                                <ul className="ingredients-moves-child list-group">
                                    {this.createIngridientList(true)}
                                </ul>
                                <div className="ingredients-moves-child arrows">
                                    <button onClick={this.addToRecipe}><span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span></button>
                                    <br />
                                    <button onClick={this.removeFromRecipe}><span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span></button>
                                </div>
                                <ul className=" ingredients-moves-child list-group">
                                    {this.createIngridientList(false)}
                                </ul>

                            </div>
                        </div>
                        <div className="form-group">
                            <button onClick={this.saveRecipe}>Save</button>
                        </div>

                    </form>
                </div>
            </div>

        )
    }
}