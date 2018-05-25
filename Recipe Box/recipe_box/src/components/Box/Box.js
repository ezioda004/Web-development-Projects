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
            recipe_image : "https://images.pexels.com/photos/161519/abstract-barbecue-barbeque-bbq-161519.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            recipe_description : "Ready in under 20 minutes, this burger with spiced chipotle chicken breast, in toasted brioche with guacamole, makes for a satisfying weeknight treat for one.",
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
            recipe_serves : "2",
            recipe_time: "40 mins",
            recipe_drink: "Corona Light"
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

    // Deletes the recipe 
    recipeDeleteHandler(e){
        const index = e.target.getAttribute("data-key");
        this.setState(prevState => {
            const newState = JSON.parse(JSON.stringify(prevState));
            newState.recipes.splice(index, 1);
            return newState;
        });
    }

    //Updates the recipe if the user clicks Save, data coming from Modal => Recipe => Box, stroed in 'e'
    updateRecipeHandler(e){
        this.setState(prevState => {
            //Checking if its a new recipe, if so add it to the state
            console.log(e.newRecipe);
            if (e.newRecipe){
                const newState = JSON.parse(JSON.stringify(prevState));
                newState.recipes.push(e.editRecipe);
                return newState;
            }
            //Otherwise update the recipe
            else {
                const newState = {...prevState};
                return newState.recipes[e.currentIndex] = e.editRecipe
            }
        });
    }

    //When the new recipe button is clicked, opens modal and changes newRecipe in state
    newRecipeHandler(e){
        const modal = document.querySelector(".modal");
        this.setState(prevState => {
            const newState = JSON.parse(JSON.stringify(prevState));
            newState.newRecipe = true;
            return newState;
        })
        modal.classList.toggle("show");
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
                />
                <div className = "new-recipe">
                    <button onClick = {(e) => this.newRecipeHandler(e)}>This is test</button>
                   
                </div>
            </main>
        );
    }
}

export default Box;