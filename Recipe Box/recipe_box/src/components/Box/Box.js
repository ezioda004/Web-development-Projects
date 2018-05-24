import React, { Component } from 'react';

import  Recipe from '../Recipe/Recipe'; 
import Modal from '../Modal/Modal';
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
    ],
    newRecipe: false
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
    newRecipeHandler(e){
        const modal = document.querySelector(".modal");
        this.setState(prevState => {
            const newState = JSON.parse(JSON.stringify(prevState));
            newState.newRecipe = true;
            return newState;
        })
        console.log(this.state, "state");
        modal.classList.toggle("show");
    }
    isNewRecipeClicked(e){
        this.setState(prevState => {
            const newState = JSON.parse(JSON.stringify(prevState));
            newState.newRecipe = false;
            return newState;
        });
        console.log("newRecipeClicked");
    }
    newRecipeToState(e){
        
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
                    isNewRecipeClicked = {(event) => this.isNewRecipeClicked(event)}
                    // addItem = {(event) => this.addItem(event)}
                />
                <div className = "new-recipe">
                    <button onClick = {(e) => this.newRecipeHandler(e)}>This is test</button>
                   
                </div>
            </main>
        );
    }
}

export default Box;