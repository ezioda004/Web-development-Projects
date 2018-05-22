import React, { Component } from 'react';

import  Recipe from '../Recipe/Recipe'; 
import './Box.css';

//Template recipes
const localRecipes = {
    recipes: 
    [   
        {
            recipe_title : "Mexican chicken burger",
            recipe_image : "url",
            recipe_description : "description here",
            recipe_ingredients: [
                "1 tblsp lol",
                "2 tbls kms"
            ],
            recipe_instructions: 
                [
                    "add something", 
                    "add something again", 
                    "ok great!"
                ],
            recipe_serves : "number",
            recipe_time: "time",
            recipe_drink: "some drink"
        },
        {
            recipe_title : "Chicken tikka masalalalalal",
            recipe_image : "url",
            recipe_description : "description here",
            recipe_ingredients: [
                "1 tblsp lol",
                "2 tbls kms"
            ],
            recipe_instructions: 
                [
                    "add something", 
                    "add something again", 
                    "ok great!"
                ],
            recipe_serves : "number",
            recipe_time: "time",
            recipe_drink: "some drink"
        }
    ]
}

//localstorage/cookie stuff

localStorage.setItem("recipe", JSON.stringify(localRecipes));
console.log(localStorage);

//Box component, a SMART one
class Box extends Component{
    constructor(props){
        super(props);

        this.state = localRecipes;
    }
    recipeDeleteHandler(e){
        const index = e.target.getAttribute("data-key");
        this.setState(prevState => {
            const newState = {...prevState};
            newState.recipes.splice(index, 1);
            return newState;
        });
    }
    updateRecipeHandler(e){
        this.setState(prevState => {
            const newState = {...prevState};
            return newState.recipes[e.currentIndex] = e.editRecipe
        })
        // console.log(this.state);
    }

    render(){
        return (
            <main id = "box"> 
                <div className = "desc">
                   <h2>this is some heading</h2>
                </div>
                <Recipe 
                    recipe = {this.state}
                    deleteRecipe = {(event) => this.recipeDeleteHandler(event)}
                    updateRecipe = {(event) => this.updateRecipeHandler(event)}
                    // addItem = {(event) => this.addItem(event)}
                />
            </main>
        );
    }
}

export default Box;