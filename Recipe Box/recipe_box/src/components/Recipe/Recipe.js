import React, { Component } from 'react';
import './Recipe.css';

class Recipe extends Component {
    constructor(props){
        super(props);
        this.state = {
            editRecipe: {
                recipe_title : "Mexican chicken burger",
                recipe_image : "url",
                recipe_description : "description here",
                ingredients: [
                    "1 tblsp lol",
                    "2 tbls kms"
                ],
                instructions: 
                    [
                        "add something", 
                        "add something again", 
                        "ok great!"
                    ],
                recipe_serves : "number",
                recipe_time: "time",
                recipe_drink: "some drink"
            },
            isEditClicked: true,
            currentIndex: null
        };
        this.editRecipeHandler = this.editRecipeHandler.bind(this);
    }
    editRecipeHandler(event){
        const modal = document.querySelector(".modal");
        if (this.state.isEditClicked){
           
            const index = event.target.getAttribute("data-key");
            console.log(index);
            // if (isEditClicked) {
            //     modal.classList.add
            // }
           
            this.setState((prevState, props) => {
                const edit =  props.recipe.recipes[index];
                
                const inputArr = ["title", "image", "description", "serves", "time", "drink"];
                inputArr.forEach(val => document.querySelector(`#edit-${val}-val`).value = edit[`recipe_${val}`]);

                return {
                    editRecipe: {
                        recipe_title : edit.recipe_title,
                        recipe_image : edit.recipe_image,
                        recipe_description : edit.recipe_description,
                        recipe_ingredients: edit.ingredients,
                        recipe_instructions: edit.instructions,
                        recipe_serves : edit.serves,
                        recipe_time: edit.time,
                        recipe_drink: edit.drink
                    },
                    currentIndex: index
                }
            });

        }
        modal.classList.toggle("show");
        this.setState(prevState => ({ isEditClicked: !prevState.isEditClicked }));
    }
    updateEditRecipeHandler(event){
            this.props.updateRecipe({
                editRecipe: {
                    recipe_title : document.querySelector("#edit-title-val").value,
                    recipe_image : document.querySelector("#edit-image-val").value,
                    recipe_description : document.querySelector("#edit-description-val").value,
                    recipe_ingredients: [1, 2, 3],
                    recipe_instructions: [1, 2, 3],
                    recipe_serves : document.querySelector("#edit-serves-val").value,
                    recipe_time: document.querySelector("#edit-time-val").value,
                    recipe_drink: document.querySelector("#edit-drink-val").value
                },
                currentIndex: this.state.currentIndex
            })

    }
    render(){
        const recipe = this.props.recipe.recipes.map((val, i, arr) => {
            // console.log(val.instructions);
            return (
                <div className = "recipe" key = {i}>
                    <div className = "recipe-title">
                        {val.recipe_title}
                    </div>
                    <div className = "recipe-image">
                        {val.recipe_image}
                    </div>
                    <div className = "recipe-description">
                        {val.recipe_description}
                    </div>
                    <div className = "recipe-ingredients">
                        {val.ingredients}
                    </div>
                    <div className = "recipe-instructions">
                        <details open>
                            <summary>Overview</summary>
                            <ol>
                                {val.recipe_instructions.map((ins, j) => <li key = {j}>{ins}</li>)}
                                <li>Cash on hand: $500.00</li>
                            </ol>
                        </details>
                    </div>
                    <div className = "recipe-serves">
                        {val.serves}
                    </div>
                    <div className = "recipe-time">
                        {val.time}
                    </div>
                    <div className = "recipe-drink">
                        {val.drink}
                    </div>
                    <button className = "edit" onClick = {this.editRecipeHandler} data-key = {i}>
                        Edit
                    </button>
                    <button className = "delete" onClick = {this.props.deleteRecipe} data-key = {i}>
                        Delete
                    </button>
                </div>
            );
        });
        return (
            <section id = "recipes">
                {recipe}
                {/* modal */}
                <div className = "modal" >
                    <h2> This is Modal </h2>
                    <span className="close" onClick = {this.editRecipeHandler}>&times;</span>
                    <div className = "modal-content">
                        <div className = "edit edit-details">
                            <h3>Details</h3>
                            <div className = "edit-edit-title">
                                <label>
                                    <span>Title:</span>
                                    <input className = "val" id = "edit-title-val"/>
                                </label>
                            </div>
                            <div className = "edit-edit-title">
                                <label>
                                    <span>Image URL:</span>
                                    <input className = "val"id = "edit-image-val"/>
                                </label>
                            </div>
                            <div className = "edit-edit-title">
                                <label>
                                    <span>Description:</span>
                                    <input className = "val"id = "edit-description-val"/>
                                </label>
                            </div>
                            <div className = "edit-edit-title">
                                <label>
                                    <span>Serves:</span>
                                    <input className = "val"id = "edit-serves-val"/>
                                </label>
                            </div>
                            <div className = "edit-edit-title">
                                <label>
                                    <span>Cooking Time:</span>
                                    <input className = "val"id = "edit-time-val"/>
                                </label>
                            </div>
                            <div className = "edit-edit-title">
                                <label>
                                    <span>Drink:</span>
                                    <input className = "val"id = "edit-drink-val"/>
                                </label>
                            </div>
                        </div> 
                        <div className = "edit edit-ingredients">
                            <h3>Ingredients</h3>
                        </div> 
                        <div className = "edit edit-instructions">
                            <h3>Instructions</h3>
                        </div> 
                    </div>
                    <button onClick = {(e) => this.updateEditRecipeHandler(e)}>save </button>
                </div>
            </section>
        );
    }
}

export default Recipe;