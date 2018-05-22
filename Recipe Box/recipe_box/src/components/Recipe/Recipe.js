import React, { Component } from 'react';
import Modal from '../Modal/Modal';
import './Recipe.css';

class Recipe extends Component {
    constructor(props){
        super(props);
        this.state = {
            editRecipe: {
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
            isEditClicked: true,
            currentIndex: null
        };
        this.editRecipeHandler = this.editRecipeHandler.bind(this);
    }
    editRecipeHandler(event){
        const modal = document.querySelector(".modal");
        if (this.state.isEditClicked){
           
            const index = event.target.getAttribute("data-key");
           
            this.setState((prevState, props) => {
                const edit =  props.recipe.recipes[index];
                console.log(edit.recipe_ingredients, "here");
                const inputArr = ["title", "image", "description", "serves", "time", "drink"];
                inputArr.forEach(val => document.querySelector(`#edit-${val}-val`).value = edit[`recipe_${val}`]);

                return {
                    editRecipe: {
                        recipe_title : edit.recipe_title,
                        recipe_image : edit.recipe_image,
                        recipe_description : edit.recipe_description,
                        recipe_ingredients: edit.recipe_ingredients,
                        recipe_instructions: edit.recipe_instructions,
                        recipe_serves : edit.recipe_serves,
                        recipe_time: edit.recipe_time,
                        recipe_drink: edit.recipe_drink
                    },
                    currentIndex: index
                }
            });

        }
        modal.classList.toggle("show");
        this.setState(prevState => ({ isEditClicked: !prevState.isEditClicked }));
    }
    updateEditRecipeHandler(event){
        const modal = document.querySelector(".modal");
            this.props.updateRecipe({
                editRecipe: {
                    recipe_title : document.querySelector("#edit-title-val").value,
                    recipe_image : document.querySelector("#edit-image-val").value,
                    recipe_description : document.querySelector("#edit-description-val").value,
                    recipe_ingredients: [...document.querySelectorAll(".ingredient")].map(val => val.textContent),
                    recipe_instructions: [...document.querySelectorAll(".instruction")].map(val => val.textContent),
                    recipe_serves : document.querySelector("#edit-serves-val").value,
                    recipe_time: document.querySelector("#edit-time-val").value,
                    recipe_drink: document.querySelector("#edit-drink-val").value
                },
                currentIndex: this.state.currentIndex
            })
            modal.classList.toggle("show");

    }
    addItem(e){
        console.log(e, "here");
        const section = Object.keys(e);
        console.log(e[section[1]], "wottt");
       
        this.setState(prevState => {
            const newState = JSON.parse(JSON.stringify(prevState)); //to make a deep copy
       
            newState.editRecipe[section[1]].push(e[section[1]]);
            return newState;
        });
    }
    saveItem(e){
        console.log(e, "here");
        
        this.setState(prevState => {
            const newState = JSON.parse(JSON.stringify(prevState));
            const keys = Object.keys(e);
            console.log(newState.editRecipe[`recipe_${keys[0]}`][e[keys[0]]])
            newState.editRecipe[`recipe_${keys[0]}`][e[keys[0]]] = e.value;
            return newState;
            
        });
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
                        <details open>
                            <summary>ingredients</summary>
                            <ol>
                                {val.recipe_ingredients.map((ing, j) => <li key = {j}>{ing}</li>)}
                            </ol>
                        </details>
                    </div>
                    <div className = "recipe-instructions">
                        <details open>
                            <summary>Overview</summary>
                            <ol>
                                {val.recipe_instructions.map((ins, j) => <li key = {j}>{ins}</li>)}
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
                <Modal
                    editRecipe = {this.state} 
                    updateEditRecipeHandler = {(e) => this.updateEditRecipeHandler(e)}
                    editRecipeHandler = {(e) => this.editRecipeHandler(e)}
                    addItem = {(e) => this.addItem(e)}
                    saveItem = {(e) => this.saveItem(e)}
                />
            </section>
        );
    }
}

export default Recipe;