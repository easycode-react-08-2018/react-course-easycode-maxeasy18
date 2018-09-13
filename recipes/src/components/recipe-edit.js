import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


export class RecipeEdit extends React.Component {
    createOriginIngridientList = () => {
        return this.props.ingridients.map( (ingr) => {
            return <li key={ingr.id}  className="ingridient list-group-item">{ingr.name}</li>
        });
    }

    render(){
        const recipe = this.props.recipe;
        return (
            <div className="recipes-edit">
                <div className="recipes-edit-child recipe-image">
                    <i className="glyphicon glyphicon-dashboard recipe-image"></i>
                    <br />
                    <button>Upload Image</button>
                    <button>Delete Image</button>
                </div>
                <div className="recipes-edit-child  recipe-detailes well">
                    <div className="recipe-detailes-child recipe-title">
                    </div>
                    <form className="recipe-detailes-child form-horizontal">
                        <div className="form-group">
                            <label htmlFor="inputEmail3" className="col-sm-2 control-label">TItle</label>
                            <div className="col-sm-10">
                                <input type="email" className="form-control" id="inputEmail3" placeholder="Title" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputPassword3" className="col-sm-2 control-label">Ingredients</label>
                            <div className="ingredients-moves col-sm-10">
                                <ul className="ingredients-moves-child list-group">
                                    <li className="ingridient list-group-item">ingr 1</li>
                                    <li className="ingridient list-group-item  active">ingr 2</li>
                                    <li className="ingridient list-group-item">ingr 3</li>
                                    <li className="ingridient list-group-item">ingr 4</li>
                                </ul>
                                <div className="ingredients-moves-child arrows">
                                    <button><span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span></button>
                                    <br />
                                    <button><span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span></button>
                                </div>
                                <ul className=" ingredients-moves-child list-group">
                                    {this.createOriginIngridientList()}
                                </ul>
                            </div>
                        </div>

                    </form>
                </div>
            </div>

        )
    }
}